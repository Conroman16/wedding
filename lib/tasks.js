let config = require('./config'),
	redis = require('redis').createClient(config.redisUrl),
	auth = require('./auth'),
	_ = require('underscore');

let tasks = {

	scrubDeadFormAuthTokens: () => {
		redis.hgetall(auth.formAuthTokenSetKey, (err, res) => {
			if (err)
				return console.error(err.stack || err);
			else if (!res || !res.lastCheck || !res.tokens)
				return;
			else if ((Date.now() - new Date(res.lastCheck)) <= config.maxFormSessionAge / 2)
				return;

			let setJson = res.tokens;
			let tokens = JSON.parse(setJson);
			let validTokens = _.reject(tokens, (token) => {
				return (Date.now() - new Date(token.timestamp)) >= config.maxFormSessionAge;
			});

			res.tokens = JSON.stringify(validTokens);
			res.lastCheck = new Date().toJSON();
			redis.hmset(auth.formAuthTokenSetKey, res);

			if (validTokens.length !== tokens.length)
				console.log(`Deleted ${tokens.length - validTokens.length} stale form sessions`);
			else
				console.log('No stale form sessions to delete');
		});
	},

	init: () => {
		tasks.scrubDeadFormAuthTokens();

		tasks.deadFormAuthTokenScrubInterval = setInterval(() => {
			tasks.scrubDeadFormAuthTokens();
		}, 1000 * 60 * 5);
	}
};

module.exports = tasks;
