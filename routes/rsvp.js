let router = require('express').Router();
let auth = require('../lib/auth');

module.exports = () => {

	router.get('/', (req, res) => {
		auth.generateFormToken()
			.then((token) => res.render('rsvp/rsvp', { token }))
			.catch((err) => res.status(500).send(err));
	});

	router.post('/', (req, res) => {
		if (!req.token)
			return res.status(500).send({ error: 'Invalid form token' });

		auth.verifyFormToken(req.body.token)
			.catch((err) => res.status(500).send(err))
			.then((valid) => {
				if (valid)
					res.sendStatus(200);
				else
					res.sendStatus(500);
			});
	});

	return router;
};
