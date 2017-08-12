let _ = require('underscore');
let config = require('./config');
let event = require('events');
let pm2 = require('pm2');
let redis = require('./redis');
let async = require('async');

let emitter = new event.EventEmitter();

let events = _.extend(emitter, {

	exitEvents: ['SIGINT', 'SIGTERM', 'SIGHUP', 'SIGBREAK', 'FULLSHUTDOWN'],

	init: () => {
		events.registerErrorHandler();
		events.registerExitEvents();
	},

	processExit: (event) => {
		if (events.shutdownEventReceived)
			return;

		console.log(`\n${event} received.  Exiting...`);
		events.shutdownEventReceived = true;
		async.series([
			(next) => redis.disconnect(next),
			(next) => pm2.killDaemon(next),
			(next) => {
				pm2.disconnect();
				next();
			},
			process.exit
		], (err, results) => console.log(err.stack || err || 'no errors', results || 'no results'));
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
