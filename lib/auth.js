let config = require('./config'),
	passport = require('passport'),
	bcrypt = require('bcrypt'),
	LocalStrategy = require('passport-local').Strategy,
	sequelize = require('sequelize'),
	db = require('../db'),
	crypto = require('crypto'),
	redis = require('./redis'),
	_ = require('underscore'),
	urlSafeBase64 = require('./urlsafe-base64');

let auth = {

	generateToken: (returnFormat, urlSafe, lengthBytes) => {
		if (!returnFormat)
			returnFormat = 'base64';
		if (_.isNumber(urlSafe))
			lengthBytes = urlSafe;

		return new Promise((resolve, reject) => {
			crypto.randomBytes(lengthBytes || 32, (err, buffer) => {
				if (err) {
					console.error(err.stack || err);
					return reject(err);
				}

				if (returnFormat === 'base64' && urlSafe)
					return resolve(urlSafeBase64.encode(buffer));
				else
					return resolve(buffer.toString(returnFormat));
			});
		});
	},

	generateFormToken: () => {
		return new Promise((resolve, reject) => {
			auth.generateToken('base64', true, 16)
				.catch((err) => reject(err))
				.then((token) => {
					redis.setFormToken(token)
						.then((token) => resolve(token))
						.catch((err) => reject(err));
				});
		});
	},

	verifyFormToken: (token) => {
		return new Promise((resolve, reject) => {
			redis.getFormToken(token)
				.then(() => {
					redis.setFormToken(token, 1)
						.catch((err) => console.error('Error setting form token', err.stack || err));
					return resolve({ success: true });
				})
				.catch((err) => reject({ success: false, message: 'Unable to locate token', error: err }));
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
			res.redirect(`${config.loginPath}?u=${encodeURIComponent(req.path)}`);
		else
			next();
	},

	httpsRedirectMiddleware: (req, res, next) => {
		if (req.headers['x-forwarded-proto'] === 'http')
			res.redirect(`https://${req.get('host')}${req.url}`);
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
