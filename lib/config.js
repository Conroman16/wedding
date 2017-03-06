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
	availableDate: new Date('Sat Mar 05 2017 07:00:00 GMT-0600 (Central Standard Time)'),
	hotelMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.4284901950805!2d-94.59626641065286!3d39.16497860422702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfebf009532625f13!2sCourtyard+by+Marriott+Kansas+City+at+Briarcliff!5e0!3m2!1sen!2sus!4v1488773248425',
	venueMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.4091867635257!2d-94.68750067005173!3d39.18815007953264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f5aa66e856f9%3A0x5023342c5c29f7cb!2sOlde+Mill+Emporium!5e0!3m2!1sen!2sus!4v1488775813089'
};

config.pathsWithoutAuth.push(config.loginPath);
config.pathsWithoutAuth.push(config.registerPath);
config.emailSender = `The Kennedys <mail@${config.primaryDomain}>`;
config.isUnderConstruction = config.isProd && config.isUnderConstruction;

module.exports = config;
