let config = {
	appName: 'dkmerger',
	isDev: process.env.NODE_ENV === 'development',
	isProd: process.env.NODE_ENV === 'production',
	webPort: process.env.PORT || 3812,
	saltRounds: 8,
	logLibSassOutput: false,
	googleAnalyticsID: '***REMOVED***',
	primaryDomain: '***REMOVED***',
	mailgunApiKey: process.env.MAILGUN_API_KEY,
	mailgunDomain: process.env.MAILGUN_DOMAIN,
	twilioAccountSID: '***REMOVED***',
	twilioAuthToken: '***REMOVED***',
	twilioNumber: '***REMOVED***',
	loginPath: '/auth/login',
	logoutPath: '/auth/logout',
	registerPath: '/auth/register',
	sessionSecret: '***REMOVED***',
	pathsWithoutAuth: [ '/', '/rsvp' ],
	redisUrl: process.env.REDISCLOUD_URL,
	maxSessionAge: 1000 * 60 * 60 * 24, // 1 day
	maxFormSessionAge: 1000 * 60 * 15, // 15 minutes
	eventDate: 'Sat Oct 14 2017 18:00:00 GMT-0500 (Central Daylight Time)'
};

config.pathsWithoutAuth.push(config.loginPath);
config.pathsWithoutAuth.push(config.registerPath);
config.emailSender = `The Kennedys <mail@${config.primaryDomain}>`;
config.isUnderConstruction = config.isProd && process.env.UNDER_CONSTRUCTION == 'true';

module.exports = config;
