let config = require('./config');
let node_redis = require('redis');

node_redis.__currentClient = node_redis.__currentClient || node_redis.createClient(config.redisUrl);

let redis = {

	client: node_redis.__currentClient,

	formAuthTokenSetPrefix: 'formauth',

	generatePrefixedKey: (prefix, key) => `${prefix}:${key}`,

	disconnect: (callback) => {
		if (!callback)
			callback = () => {};

		if (!redis.client)
			callback();
		else
			redis.client.quit(callback);
	},

	generateArgsWithTTL: (key, value, ttlInSeconds) => {
		let args = [ key, value ];
		if (ttlInSeconds)
			args.push('EX', ttlInSeconds);
		return args;
	},

	setFormToken: (token, ttl) => {
		if (!ttl)
			ttl = config.maxFormSessionAge / 1000;

		return new Promise((resolve, reject) => {
			let key = redis.generatePrefixedKey(redis.formAuthTokenSetPrefix, token);
			let redisArgs = redis.generateArgsWithTTL(key, '', ttl);
			redis.client.set(redisArgs, (err, reply) => {
				if (err) {
					console.error(err.stack || err, reply);
					return reject(err);
				}
				return resolve(token);
			});
		});
	},

	getFormToken: (token) => {
		return new Promise((resolve, reject) => {
			let key = redis.generatePrefixedKey(redis.formAuthTokenSetPrefix, token);
			redis.client.get(key, (err, reply) => {
				if (err){
					console.error(err.stack || err, reply);
					return reject(err);
				}
				else if (reply === null)
					return reject({ error: 'token does not exist' });
				return resolve(reply);
			});
		});
	},

	healthCheck: () => {
		return new Promise((resolve, reject) => {
			let retObj = { ok: false };
			redis.client.ping((err, pong) => {
				if (err)
					return reject(Object.assign(retObj, { error: err }));

				if (pong !== 'PONG')
					return reject(Object.assign(retObj, { error: `Incorrect ping response.  Expected 'PONG', got '${pong}'` }));

				return resolve(Object.assign(retObj, { ok: true }));
			});
		});
	}
};

module.exports = redis;
