let config = {
	appName: 'dkmerger',
	isDev: process.env.NODE_ENV === 'development',
	isProd: process.env.NODE_ENV === 'production',
	webPort: process.env.PORT || 3812,
	saltRounds: 8,
	logLibSassOutput: false,
	serverHeader: '',
	loginPath: '/auth/login',
	logoutPath: '/auth/logout',
	registerPath: '/auth/register',
	sessionSecret: '***REMOVED***',
	pathsWithoutAuth: [ '/', '/rsvp' ],
	redisUrl: process.env.REDISCLOUD_URL || '',
	maxSessionAge: 1000 * 60 * 60 * 24, // 1 day
	maxFormSessionAge: 1000 * 60 * 15 // 15 minutes
};

config.pathsWithoutAuth.push(config.loginPath);
config.pathsWithoutAuth.push(config.registerPath);

module.exports = config;
