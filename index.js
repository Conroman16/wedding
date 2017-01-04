var pm2 = require('pm2');
var os = require('os');

var memory = process.env.WEB_MEMORY || 512;


pm2.connect(() => {
	pm2.start({
		script: 'app.js',
		name: 'dkmerger',
		exec_mode: 'cluster',
		instances: os.cpus().length > 4 ? 4 : os.,
		max_memory_restart: memory
	}, (err) => {
		if (err)
			return console.error(err.stack || err);
		console.log('PM2 and app have started successfully');

		pm2.launchBus((err, bus) => {
			if (err)
				return console.error(err.stack || err);
			bus.on('log:out', (packet) => console.log('[App:%s] %s', packet.process.name, packet.data));
			bus.on('log:err', (packet) => console.error('[App:%s][Err] %s', packet.process.name, packet.data));
		});
	});
});
