let config = require('./config');
let node_redis = require('redis');

node_redis.__currentClient = node_redis.__currentClient || node_redis.createClient(config.redisUrl);

let redis = {

	client: node_redis.__currentClient,

	disconnect: (callback) => {
		if (!callback)
			callback = () => {};

		if (!redis.client)
			callback();
		else
			redis.client.quit(callback);
	}
};

module.exports = redis;
