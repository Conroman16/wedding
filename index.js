let pm2 = require('pm2');
let os = require('os');
let events = require('./lib/events');
let config = require('./lib/config');

let cpus = os.cpus();
let memory = process.env.WEB_MEMORY || 512; // Megabytes
// let instances = cpus.length > 4 ? 4 : cpus.length;
let instances = cpus.length;
let usePm2Daemon = true;

pm2.connect(!usePm2Daemon, () => {
	pm2.start({
		script: 'app.js',
		name: config.appName,
		exec_mode: 'cluster',
		instances: config.isDev ? 2 : instances,
		max_memory_restart: `${memory}M`,
		merge_logs: true,
		env: process.env
	}, (err) => {
		if (err)
			return console.error(err.stack || err);

		events.registerExitEvents(process);
		pm2.launchBus((err, bus) => {
			if (err)
				return console.error(err.stack || err);

			bus.on('log:out', (packet) => console.log('[%s]:[log] %s', packet.process.name, packet.data));
			bus.on('log:err', (packet) => console.error('[%s]:[err] %s', packet.process.name, packet.data));
		});
	});
});
