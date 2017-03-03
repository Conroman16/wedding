let config = {
	appName: 'dkmerger',
	hashTag: '#KTTK17',
	isDev: process.env.NODE_ENV === 'development',
	isProd: process.env.NODE_ENV === 'production',
	webPort: process.env.PORT || 3812,
	saltRounds: 8,
	logLibSassOutput: false,
	adminEmail: '***REMOVED***',
	googleAnalyticsID: '***REMOVED***',
	primaryDomain: '***REMOVED***',
	mailgunApiKey: process.env.MAILGUN_API_KEY,
	mailgunDomain: process.env.MAILGUN_DOMAIN,
	smsEnabled: false,
	twilioAccountSID: '***REMOVED***',
	twilioAuthToken: '***REMOVED***',
	twilioNumber: '***REMOVED***',
	opbeatAppID: process.env.OPBEAT_APP_ID,
	opbeatOrgID: process.env.OPBEAT_ORG_ID,
	opbeatSecretToken: process.env.OPBEAT_SECRET_TOKEN,
	opbeatEnabled: !!JSON.parse(process.env.OPBEAT_ENABLED || 'false'),
	rsvpEnabled: !!JSON.parse(process.env.RSVP_ENABLED || 'false'),
	isUnderConstruction: !!JSON.parse(process.env.UNDER_CONSTRUCTION || 'false'),
	loginPath: '/auth/login',
	logoutPath: '/auth/logout',
	registerPath: '/auth/register',
	sessionSecret: '***REMOVED***',
	pathsWithoutAuth: [ '/', '/rsvp' ],
	redisUrl: process.env.REDISCLOUD_URL,
	maxSessionAge: 1000 * 60 * 60 * 24, // 1 day
	maxFormSessionAge: 1000 * 60 * 15, // 15 minutes
	eventDate: new Date('Sat Oct 14 2017 18:00:00 GMT-0500 (Central Daylight Time)'),
	availableDate: new Date('Sat Mar 04 2017 07:00:00 GMT-0600 (Central Standard Time)')
};

config.pathsWithoutAuth.push(config.loginPath);
config.pathsWithoutAuth.push(config.registerPath);
config.emailSender = `The Kennedys <mail@${config.primaryDomain}>`;
config.isUnderConstruction = config.isProd && config.isUnderConstruction;

module.exports = config;
