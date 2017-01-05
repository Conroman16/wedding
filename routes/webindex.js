var router = require('express').Router();
var auth = require('../lib/auth');

module.exports = () => {

    router.get('/', (req, res) => {
		res.render('index/index');
    });

	router.get('/rsvp', (req, res) => {
		auth.generateToken()
			.then((token) => res.render('index/rsvp', { token }))
			.catch((err) => res.status(500).send(err));
	});

	router.post('/rsvp', (req, res) => {
		console.log('RSVP POSTED', req.body);
		res.sendStatus(200);
	});

    return router;
};
