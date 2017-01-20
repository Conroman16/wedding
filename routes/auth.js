let router = require('express').Router();
let passport = require('passport');
let db = require('../db');
let config = require('../lib/config');
let auth = require('../lib/auth');

module.exports = () => {

	router.get('/logout', (req, res) => {
		if (req.isAuthenticated())
			req.logout();
		res.redirect('/');
	});

	router.get('/login', (req, res) => {
		if (req.isAuthenticated())
			res.redirect('/');
		else
			res.render('auth/login');
	});

	router.post('/login', (req, res, next) => {
		passport.authenticate('local', (err, user) => {
			if ((err && /of null/i.test(err)) || !user)
				return res.status(500).send({ error: 'Invalid credentials' });

			req.logIn(user, (err) => {
				if (err)
					return next(err);

				let redirectUrl = '/';
				if (req.query.u)
					redirectUrl = decodeURIComponent(req.query.u);

				return res.send({
					success: true,
					redirectUrl: redirectUrl
				});
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
		let firstName = req.body.firstname || '';
		let lastName = req.body.lastname || '';
		let email = req.body.email || '';
		let password = req.body.password || '';

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
