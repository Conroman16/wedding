let os = require('os');
let router = require('express').Router();
let pm2 = require('pm2');

module.exports = () => {

	router.get('/', (req, res) => {
		pm2.list((err, procs) => {
			if (err)
				return res.status(500).send(err);

			let cpus = os.cpus();
			let items = [
				{ key: 'cpu', value: cpus[0].model },
				{ key: 'cores', value: cpus.length },
				{ key: 'cluster nodes', value: procs.length }
			];
			res.render('server/about', { items: items });
		});
	});

	router.get('/pm2', (req, res) => {

	});

	return router;
};
