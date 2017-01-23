let config = require('./config');

let viewData = {
	IsProd: config.isProd,
	IsDev: config.isDev,
	GoogleAnalyticsID: config.googleAnalyticsID,
	PageTitle: config.hashTag,
	LoginPath: config.loginPath,
	LogoutPath: config.logoutPath,
	RegisterPath: config.registerPath,
	EventDate: config.eventDate,
	AdminEmail: config.adminEmail,
	SmsEnabled: config.smsEnabled
};

viewData.middleware = (req, res, next) => {
	res.locals = Object.assign({}, res.locals, {
		IsAuthed: req.isAuthenticated(),
		IsNotAuthed: req.isUnauthenticated()
	});
	next();
};

module.exports = viewData;
