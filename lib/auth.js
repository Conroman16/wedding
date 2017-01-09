let config = require('./config'),
	passport = require('passport'),
	bcrypt = require('bcrypt'),
	LocalStrategy = require('passport-local').Strategy,
	sequelize = require('sequelize'),
	db = require('../db'),
	crypto = require('crypto'),
	redis = require('redis').createClient(config.redisUrl),
	_ = require('underscore');

let auth = {

	formAuthTokenSetKey: 'formauth',

	generateToken: (lengthBytes, returnFormat) => {
		return new Promise((resolve, reject) => {
			crypto.randomBytes(lengthBytes || 32, (err, buffer) => {
				if (err)
					return reject(err);
				resolve(buffer.toString(returnFormat || 'base64'))
			});
		});
	},

	generateFormToken: () => {
		return new Promise((resolve, reject) => {
			auth.generateToken()
				.catch((err) => reject(err))
				.then((token) => {
					redis.get(auth.formAuthTokenSetKey, (err, res) => {
						if (err)
							reject(err);
						let currentTokens = JSON.parse(res) || [];
						currentTokens.push(token);
						redis.set(auth.formAuthTokenSetKey, JSON.stringify(currentTokens), (err, res) => {});
						resolve(token);
					});
				});
		});
	},

	verifyFormToken: (token) => {
		return new Promise((resolve, reject) => {
			redis.get(auth.formAuthTokenSetKey, (err, res) => {
				if (err)
					reject(err);
				let tokens = JSON.parse(res);

				if (_.contains(tokens, token)){
					redis.set(auth.formAuthTokenSetKey, JSON.stringify(_.reject(tokens, (t) => t === token)));
					resolve(true);
				}
				else
					reject(false);
			});
		});
	},

	hashPassword: (password) => {
		return new Promise((resolve, reject) => {
			bcrypt.hash(password, config.saltRounds, (err, hash) => {
				if (err)
					return reject(err);

				resolve(hash);
			});
		});
	},

	verifyPassword: (user, password) => {
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.hash, (err, success) => {
				if (err)
					return reject(err);

				success ? resolve(success) : reject(success);
			});
		});
	},

	loginUser: (email, password, done) => {
		db.User.findOne({
			// Use native 'lower' function for case insensitive comparison
			where: sequelize.where(sequelize.fn('lower', sequelize.col('email')), sequelize.fn('lower', email))
		}).then((user) => {
			auth.verifyPassword(user, password).then((success) => {
				if (!user)
					done(null, false, { message: 'unknown user' });
				else if (!success)
					done(null, false, { message: 'invalid password' });
				else {
					user.lastLogin = new Date();
					user.save();
					done(null, user);
				}
			}).catch((success) => {
				done(success);
			});
		}).catch((err) => {
			done(err);
		});
	},

	createUser: (email, password, firstName, lastName) => {
		return new Promise((resolve, reject) => {
			auth.hashPassword(password).then((hash) => {
				db.User.create({
					email: email,
					hash: hash,
					firstName: firstName,
					lastName: lastName,
					created: new Date()
				}).then((newUser) => {
					resolve(newUser);
				}).catch((err) => {
					reject(err);
				});
			}).catch((err) => {
				reject(err);
			});
		});
	},

	serializeUser: (user, done) => {
		done(null, user.email);
	},

	deserializeUser: (email, done) => {
		db.User.findOne({ where: { email: email }}).then((user) => {
			done(null, user);
		}).catch((err) => {
			done(err);
		});
	},

	redirectMiddleware: (req, res, next) => {
		if (req.isUnauthenticated() && !/\/static\//i.test(req.path) && config.pathsWithoutAuth.indexOf(req.path) < 0)
			res.redirect(config.loginPath);
		else
			next();
	},

	init: () => {
		passport.use(new LocalStrategy(auth.loginUser));
		passport.serializeUser(auth.serializeUser);
		passport.deserializeUser(auth.deserializeUser);
	}
};

auth.init();

module.exports = auth;
