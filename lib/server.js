var path = require('path'),
	http = require('http'),
	express = require('express'),
	bodyparser = require('body-parser'),
	cookieparser = require('cookie-parser'),
	swig = require('swig-templates'),
	sass = require('node-sass-middleware'),
	config = require('../lib/config'),
	passport = require('passport'),
	db = require('../db'),
	authentication = require('./auth'),
	session = require('express-session'),
	events = require('../lib/events'),
	redis = require('redis');

var server = {

	serverHeaderMiddleware: (req, res, next) => {
		res.header('server', config.serverHeader);
		next();
	},

	start: () => {
		var app = express(),
			viewData = require('./viewdata'),
			index = require('../routes/webindex')(),
			auth = require('../routes/auth')(),
			srvr = require('../routes/server')(),
			redisStore = require('connect-redis')(session),
			staticFilesDir = path.resolve('./static'),
			viewsDir = path.resolve('./views');

		swig.setDefaults({
			cache: config.isDev ? false : 'memory',
			locals: viewData
		});

		app.engine('swig', swig.renderFile);
		app.set('view engine', 'swig');
		app.set('views', viewsDir);

		app.use(sass({
			src: path.join(staticFilesDir, 'style'),
			dest: path.join(staticFilesDir, 'css'),
			outputStyle: config.isDev ? 'expanded' : 'compressed',
			prefix: '/static/css',
			debug: config.logLibSassOutput
		}));

		app.use(bodyparser.urlencoded({ extended: true }));
		app.use(cookieparser());

		app.use(session({
			store: new redisStore({
				client: redis.createClient(config.redisUrl, { no_ready_check: true })
			}),
			secret: config.sessionSecret,
			resave: false,
			saveUninitialized: false,
			maxAge: config.maxSessionAge,
			cookie: {
				maxAge: config.maxSessionAge
			}
		}));

		app.use(passport.initialize());
		app.use(passport.session());
		app.use(authentication.redirectMiddleware);
		app.use(viewData.middleware);
		app.use(server.serverHeaderMiddleware);

		app.use('/', index);
		app.use('/auth', auth);
		app.use('/server', srvr);
		app.use('/static', express.static(staticFilesDir, {
			setHeaders: (res) => {
				res.header('server', config.serverHeader);
			}
		}));

		server.app = app;
		server.httpServer = http.createServer(app).listen(config.webPort, () => {
			events.emit('webserverStarted', config.webPort);
			console.log(`Listening on *:${config.webPort}`);
		});
	}
};

module.exports = server;
