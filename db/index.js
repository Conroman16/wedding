var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var config    = require('./config.json')[process.env.NODE_ENV];
var db        = {};

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
