var router = require('express').Router();
var passport = require('passport');
var db = require('../db');
var config = require('../lib/config');
var auth = require('../lib/auth');

module.exports = () => {

	router.get('/logout', (req, res) => {
		if (req.isAuthenticated())
			req.logout();
		res.redirect(config.loginPath);
	});

	router.get('/login', (req, res) => {
		if (req.isAuthenticated())
			res.redirect('/');
		else
			res.render('auth/login');
	});

	router.post('/login', (req, res, next) => {
		passport.authenticate('local', (err, user) => {
			if (err && /of null/i.test(err))
				return res.redirect(`${config.registerPath}?from=login`);
			else if (!user)
				return res.redirect(`${config.loginPath}?status=failed`);

			req.logIn(user, (err) => {
				if (err)
					return next(err);
				else if (req.query.u)
					return res.redirect(decodeURIComponent(u));
				else
					return res.redirect('/');
			});
		})(req, res, next);
	});

	router.get('/register', (req, res) => {
		if (req.isAuthenticated())
			res.redirect('/');
		else
			res.render('auth/register');
	});

	router.post('/register', (req, res) => {
		var firstName = req.body.firstname || '';
		var lastName = req.body.lastname || '';
		var email = req.body.email || '';
		var password = req.body.password || '';

		if (!email)
			res.status(500).send({success: false, error: 'invalid username'});
		else if (!password)
			res.status(500).send({success: false, error: 'invalid password'});
		else
			auth.createUser(email, password, firstName, lastName).then((newUser) => {
				res.status(200).redirect('/');
			}).catch((err) => {
				res.status(500).send(err);
			});
	});

	return router;
};
