var _ = require('underscore');
var config = require('./config');
var event = require('events');
var pm2 = require('pm2');

var emitter = new event.EventEmitter();

var events = _.extend(emitter, {

	exitEvents: ['SIGINT', 'SIGTERM', 'SIGHUP', 'SIGBREAK', 'PROCERR'],

	init: () => {
		events.registerErrorHandler();
		events.registerExitEvents();
	},

	processExit: (event) => {
		console.log(`\n${event} received.  Exiting...`);
		pm2.killDaemon(() => {
			pm2.disconnect();
			process.exit();
		});
	},

    registerErrorHandler: () => {
        process.on('uncaughtException', (err) => {
            console.log(err.stack || err);
            if (config.isDev)
                process.emit('PROCERR');
        });
    },

	registerExitEvents: (proc) => {
		_.each(events.exitEvents, (event) => {
			(proc || process).on(event, () => {
				events.processExit(event);
			});
		});
	}
});

module.exports = events;
