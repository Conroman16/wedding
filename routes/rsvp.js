let router = require('express').Router();
let auth = require('../lib/auth');
let email = require('../lib/email');

module.exports = () => {

	router.get('/', (req, res) => {
		auth.generateFormToken()
			.then((token) => res.render('rsvp/rsvp', { token }))
			.catch((err) => res.status(500).send(err));
	});

	router.post('/', (req, res) => {
		if (!req.body.token)
			return res.status(500).send({ error: 'Invalid form token' });
		else if (!req.body.name || !req.body.attending || !req.body.attendees)
			return res.status(500).send({ error: 'Invalid value for name, attending, or attendees' });

		auth.verifyFormToken(req.body.token)
			.then((valid) => {
				if (!valid)
					return res.sendStatus(500);

				email.sendEmail('cjtkennedy@gmail.com', 'RSVP Posted', { title: 'RSVP Posted', data: JSON.stringify(req.body) })
					.catch((err) => res.status(500).send({ error: err }))
					.then((response) => res.sendStatus(200));
			})
			.catch((err) => res.status(500).send({ error: err }));
	});

	return router;
};
