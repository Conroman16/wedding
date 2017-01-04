var os = require('os');
var router = require('express').Router();

module.exports = () => {

	router.get('/cpus', (req, res) => {
		res.send(os.cpus());
	});

	return router;
};
