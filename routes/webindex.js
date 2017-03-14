let router = require('express').Router();
let auth = require('../lib/auth');

module.exports = () => {

    router.get('/', (req, res) => res.render('index/index'));

    router.post('/getformauthtoken', (req, res) => {
		auth.generateFormToken()
			.catch((err) => {
				console.error(err.stack || err);
				res.status(500).send({ success: false, error: err });
			})
			.then((token) => res.send({ token: token }));
	});

    return router;
};
