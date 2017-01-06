let os = require('os');
let router = require('express').Router();
let pm2 = require('pm2');
let config = require('../lib/config');

module.exports = () => {

	router.get('/', (req, res) => {
		pm2.describe(config.appName, (err, description) => {
			if (err)
				return res.status(500).send(err);

			let cpus = os.cpus();
			let pm_env = description[0].pm2_env;
			let items = [
				{ key: 'cpu', value: cpus[0].model },
				{ key: 'cores', value: cpus.length },
				{ key: 'cluster nodes', value: pm_env.instances },
				{ key: 'cwd', value: pm_env.pm_cwd },
				{ key: 'exec', value: pm_env.pm_exec_path },
				{ key: 'unstable restarts', value: pm_env.unstable_restarts }
			];
			res.render('server/about', { items: items });
		});
	});

	return router;
};
