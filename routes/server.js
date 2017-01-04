var os = require('os');
var router = require('express').Router();
var _ = require('underscore');

module.exports = () => {

	router.get('/', (req, res) => {
		var cpus = os.cpus();
		var items = [
			{ key: 'cpu', value: cpus[0].model },
			{ key: 'cores', value: cpus.length }
		];
		res.render('server/about', { items: items });
	});

	return router;
};
