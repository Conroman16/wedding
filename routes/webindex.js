var router = require('express').Router();
var auth = require('../lib/auth');

module.exports = () => {

    router.get('/', (req, res) => {
		res.render('index/index');
    });

	router.get('/contact', (req, res) => {
		auth.generateToken()
			.then((token) => res.render('index/contact', { token }))
			.catch((err) => res.status(500).send(err));
	});

	router.post('/contact', (req, res) => {
		console.log('CONTACT FORM POSTED', req.body);
		res.sendStatus(200);
	});

    return router;
};
