let fs = require('fs');
let path = require('path');
let Sequelize = require('sequelize');
let appConfig = require('../lib/config');
let dbConfig = require('./config');
let config = {};
let db = {};

if (!process.env.DATABASE_URL)
	config = dbConfig[process.env.NODE_ENV];
else {
	let dbUrlMatch = process.env.DATABASE_URL.match(/(\w+):\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
	config = {
		dialect: dbUrlMatch[1],
		protocol: dbUrlMatch[1],
		database: dbUrlMatch[6],
		username: dbUrlMatch[2],
		password: dbUrlMatch[3],
		host: dbUrlMatch[4],
		port: dbUrlMatch[5],
		logging: appConfig.isDev ? false : undefined,
		dialectOptions: {
			ssl: true
		}
	};
}

let sequelize = new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(path.join(__dirname, 'models'))
	.filter((file) => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
	.forEach((file) => {
		let model = sequelize['import'](path.join(__dirname, 'models', file));
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate)
		db[modelName].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
