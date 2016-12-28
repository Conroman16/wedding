if (!process.env.NODE_ENV)
    process.env.NODE_ENV = 'development';

console.log(`${process.env.NODE_ENV.toUpperCase()} MODE`);

var db = require('./db'),
    server = require('./lib/server'),
    events = require('./lib/events');

events.init();
events.init();

db.sequelize.sync().then(() => {
    server.start();
});