let router = require('express').Router();
let sms = require('../lib/sms');

module.exports = () => {

    router.get('/', (req, res) => {
		res.render('index/index');
    });

    router.get('/smstest', (req, res) => {
		sms.send('4176196364', 'Testing 1..2...3....')
			.then((response) => res.send(response))
			.catch((error) => res.status(500).send(error));
	});

    return router;
};
