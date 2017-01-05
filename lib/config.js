var config = {
	isDev: process.env.NODE_ENV === 'development',
	isProd: process.env.NODE_ENV === 'production',
	webPort: process.env.PORT || 3812,
	saltRounds: 8,
	logLibSassOutput: false,
	serverHeader: '',
	loginPath: '/auth/login',
	logoutPath: '/auth/logout',
	registerPath: '/auth/register',
	sessionSecret: 's0M3th!Mg_v3rY_uB3r_Z3cR3t',
	pathsWithoutAuth: [ '/', '/rsvp' ],
	redisUrl: process.env.REDISCLOUD_URL || '',
	maxSessionAge: 1000 * 60 * 60 * 24 // 1 day
};

config.pathsWithoutAuth.push(config.loginPath);
config.pathsWithoutAuth.push(config.registerPath);

module.exports = config;
