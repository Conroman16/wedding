var config = {
	isDev: process.env.NODE_ENV === 'development',
	isProd: process.env.NODE_ENV === 'production',
	webPort: 3812,
	saltRounds: 8,
	logLibSassOutput: false,
	serverHeader: '',
	loginPath: '/auth/login',
	logoutPath: '/auth/logout',
	registerPath: '/auth/register',
	sessionSecret: '***REMOVED***',
	pathsWithoutAuth: [ '/' ],
	redisUrl: process.env.REDISCLOUD_URL || ''
};

config.pathsWithoutAuth.push(config.loginPath);
config.pathsWithoutAuth.push(config.registerPath);

module.exports = config;
