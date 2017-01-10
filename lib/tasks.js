let config = require('./config'),
	redis = require('redis').createClient(config.redisUrl),
	auth = require('./auth'),
	_ = require('underscore');

let tasks = {

	cleanDeadFormAuthTokens: () => {
		redis.get(auth.formAuthTokenSetKey, (err, setJson) => {
			if (err)
				return console.error(err.stack || err);

			let tokens = JSON.parse(setJson);
			let validTokens = _.reject(tokens, (token) => {
				let ts = new Date(token.timestamp);
				return (new Date() - ts) >= config.maxFormSessionAge;
			});

			// Only update if something has changed
			if (validTokens.length !== tokens.length) {
				redis.set(auth.formAuthTokenSetKey, JSON.stringify(validTokens), (err, res) => {});
				let deletedSessions = tokens.length - validTokens.length;
				console.log(`Deleted ${deletedSessions} stale form sessions from redis`);
			}
			else
				console.log('No stale form sessions to delete');
		});
	},

	init: () => {
		tasks.cleanDeadFormAuthTokens();

		tasks.rsvpInterval = setInterval(() => {
			tasks.cleanDeadFormAuthTokens();
		}, 1000 * 60 * 5);
	}
};

module.exports = tasks;
