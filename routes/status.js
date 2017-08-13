let router = require('express').Router();
let redis = require('../lib/redis');
let async = require('async');
let db = require('../db');

module.exports = () => {

	// Check both the status of the DB and the status of the Redis server and respond accordingly
	router.get('/', (req, res) => {

		async.waterfall([
			(next) => {
				redis.checkStatus()
					.catch((data) => next(data.error))
					.then((data) => next(null, { redis: data }));
			},
			(data, next) => {
				db.checkStatus()
					.catch((statusData) => next(statusData.error))
					.then((statusData) => next(null, Object.assign(data, { db: statusData })));
			}
		], (err, data) => {
			if (err)
				return console.error(err);

			let retObj = { status: 'OK' };
			if (!data.db.ok) {
				Object.assign(retObj, {
					status: 'ERROR',
					db: { status: 'ERROR' }
				});
			}
			if (!data.redis.ok) {
				Object.assign(retObj, {
					status: 'ERROR',
					redis: { status: 'ERROR' }
				});
			}

			// ?showtestresults=true
			if (req.query.showtestresults && JSON.parse(req.query.showtestresults))
				Object.assign(retObj, { testresults: data });

			res.type('application/json').send(retObj.toFormattedJson());
		});
	});

	return router;
};
