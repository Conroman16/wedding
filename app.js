if (!process.env.NODE_ENV){
	if (process.argv[2])
		process.env.NODE_ENV = process.argv[2];
	else
		process.env.NODE_ENV = 'development';
}

console.log(`${process.env.NODE_ENV.toUpperCase()} MODE`);

require('./lib/extensions');  // Configure extensions
let db = require('./db'),
	server = require('./lib/server'),
	events = require('./lib/events'),
	tasks = require('./lib/tasks');

events.init();

db.sequelize.sync().then(() => {
	server.start();
	tasks.init();
});
