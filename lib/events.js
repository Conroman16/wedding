let _ = require('underscore');
let config = require('./config');
let event = require('events');
let pm2 = require('pm2');

let emitter = new event.EventEmitter();

let events = _.extend(emitter, {

	exitEvents: ['SIGINT', 'SIGTERM', 'SIGHUP', 'SIGBREAK', 'FULLSHUTDOWN'],

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
                process.emit('FULLSHUTDOWN');
            else
            	process.exit();
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
