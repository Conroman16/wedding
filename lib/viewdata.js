let config = require('./config');
let moment = require('moment');

let viewData = {
	IsProd: config.isProd,
	IsDev: config.isDev,
	GoogleAnalyticsID: config.googleAnalyticsID,
	PageTitle: config.hashTag,
	LoginPath: config.loginPath,
	LogoutPath: config.logoutPath,
	RegisterPath: config.registerPath,
	EventDate: config.eventDate.toJSON(),
	AvailableDate: config.availableDate.toJSON(),
	AvailableDateString: moment(config.availableDate).format('MMM Do YYYY'),
	AdminEmail: config.adminEmail,
	SmsEnabled: config.smsEnabled,
	RsvpEnabled: config.rsvpEnabled
};

viewData.middleware = (req, res, next) => {
	res.locals = Object.assign({}, res.locals, {
		IsAuthed: req.isAuthenticated(),
		IsNotAuthed: req.isUnauthenticated()
	});
	next();
};

module.exports = viewData;
