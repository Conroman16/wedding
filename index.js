var pm2 = require('pm2');
var os = require('os');
var events = require('./lib/events');

var memory = process.env.WEB_MEMORY || 512; // Megabytes
var instances = os.cpus().length > 4 ? 4 : os.cpus().length;
var usePm2Daemon = true;

pm2.connect(!usePm2Daemon, () => {
	pm2.start({
		script: 'app.js',
		name: 'dkmerger',
		exec_mode: 'cluster',
		instances: instances,
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
