let winston = require('winston');
let db = require('../db');

let logger = {

	sequelizeTransport: () => {

		let SequelizeTransport = winston.Transport;

		SequelizeTransport.prototype.log = (level, message, meta, callback) => {
			db.ApplicationLog.create({
				level: level,
				message: message,
				meta: JSON.stringify(meta)
			})
				.then((newLog) => {
					// SequelizeTransport.emit('logged');
					callback(newLog);
				})
				.catch((err) => {
					// SequelizeTransport.emit('error', err);
					callback(err);
				});
		};

		SequelizeTransport.prototype.clear = (lifetime) => {
			let clause = { truncate: true };

			if (typeof lifetime == 'number')
				clause = { where: { updatedAt: { $lt: new Date(Date.now() - lifetime) } } };

			return db.ApplicationLog.destroy(clause);
		};

		return SequelizeTransport;
	},

	init: () => {
		logger = Object.assign({}, logger, new winston.Logger({
			transports: [
				new winston.transports.Console(),
				new winston.transports.Sequelize()
			]
		}));
	}
};

winston.transports.Sequelize = logger.sequelizeTransport();

module.exports = logger;
