if (!process.env.NODE_ENV){
	if (process.argv[2])
		process.env.NODE_ENV = process.argv[2];
	else
		process.env.NODE_ENV = 'development';
}

console.log(`${process.env.NODE_ENV.toUpperCase()} MODE`);

let config = require('./lib/config');
let opbeat = require('opbeat');
// if (config.isProd){
	 opbeat.start({
		appId: '19adbb6fb5',
		organizationId: 'dd519ce34581415b8fb59720a762194d',
		secretToken: '46c0cbaf5b5c63cff6ad0115f37a67326cb35e42'
	});
// }

require('./lib/extensions');  // Configure extensions
let db = require('./db'),
	server = require('./lib/server'),
	events = require('./lib/events'),
	logger = require('./lib/logger');

// Suppress bluebird warnings
//  - This app does not directly depend on bluebird (and probably never will now that ES6 includes native native Promises),
//  - so its warnings aren't really important at this point
require('bluebird').config({ warnings: false });

events.init();

db.sequelize.sync().then(() => {
	logger.init();
	server.start();
});
