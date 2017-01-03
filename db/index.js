var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var allConfig = require('./config.json');
var db        = {};
var appConfig = require('../lib/config');

if (!process.env.DATABASE_URL)
	var config = allConfig[process.env.NODE_ENV];
else {
	var dbUrlMatch = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
	console.log('MATCHES', dbUrlMatch);
	var config = {
		dialect: 'postgres',
		protocol: 'postgres',
		database: dbUrlMatch[5],
		username: dbUrlMatch[1],
		password: dbUrlMatch[2],
		host: dbUrlMatch[3],
		port: dbUrlMatch[4],
		logging: appConfig.isDev,
		dialectOptions: {
			ssl: true
		}
	};
}

if (config.use_env_variable)
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
else
  var sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
  .readdirSync(path.join(__dirname, 'models'))
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    var model = sequelize['import'](path.join(__dirname, 'models', file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate)
    db[modelName].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
