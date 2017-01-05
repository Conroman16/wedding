let config = require('./config');

let viewData = {
	IsProd: config.isProd,
	IsDev: config.isDev,
	GoogleAnalyticsID: 'UA-xxxxxxxx-x',
	PageTitle: 'Wedding',
	LoginPath: config.loginPath,
	LogoutPath: config.logoutPath,
	RegisterPath: config.registerPath
};

viewData.middleware = (req, res, next) => {
	res.locals = Object.assign({}, res.locals, {
		IsAuthed: req.isAuthenticated(),
		IsNotAuthed: req.isUnauthenticated()
	});
	next();
};

module.exports = viewData;
