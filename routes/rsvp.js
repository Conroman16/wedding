let router = require('express').Router();
let auth = require('../lib/auth');
let email = require('../lib/email');
let db = require('../db');
let excel = require('../lib/excel');
let _ = require('underscore');
let config = require('../lib/config');
let async = require('async');

module.exports = () => {

	router.get('/', (req, res) => {
		if (!config.rsvpEnabled)
			return res.redirect('/');

		auth.generateFormToken()
			.then((token) => res.render('rsvp/rsvp', { token }))
			.catch((err) => res.status(500).send(err));
	});

	router.post('/', (req, res) => {
		if (!config.rsvpEnabled)
			return res.sendStatus(404);

		if (!req.body.token)
			return res.status(500).send({ error: 'Invalid form token' });
		else if (!req.body.name || !req.body.attending)
			return res.status(500).send({ error: 'Invalid value for name or attending' });

		auth.verifyFormToken(req.body.token)
			.then((valid) => {
				if (!valid)
					return res.status(500).send({ error: 'Invalid form token' });

				let isAttending = JSON.parse(req.body.attending);
				let attendees = JSON.parse(req.body.attendees || '0');
				let rsvpEmail = decodeURIComponent(req.body.email);

				async.series([
					(next) => {
						db.Rsvp.create({
							name: decodeURIComponent(req.body.name),
							email: rsvpEmail,
							phone: decodeURIComponent(req.body.phone),
							message: decodeURIComponent(req.body.message),
							isAttending: isAttending,
							attendees: attendees,
							vegetarianMeal: req.body.vegetarianMeal || false
						})
							.then((newRsvp) => next(null, newRsvp))
							.catch((err) => next(err));
					},
					(next) => {
						email.sendEmail(config.adminEmail, 'RSVP Posted', { title: 'RSVP Posted', data: JSON.stringify(req.body) })
							.then((response) => next(null, response))
							.catch((err) => {
								console.error('Unable to send RSVP post notification email', err);
								next(err);
							});
					},
					(next) => {
						email.sendEmail(rsvpEmail, 'RSVP Confirmation', {
							Attending: isAttending,
							NotAttending: !isAttending,
							AttendingAlone: attendees === 1,
							NotAttendingAlone: attendees > 1,
							MoreThanOneExtraGuest: attendees > 2,
							Attendees: attendees - 1,
						}, email.templates.rsvpConfirmation)
							.then((response) => next(null, response))
							.catch((err) => {
								console.error('Unable to send RSVP confirmation email', err);
								next(err);
							});
					}
				], (err, results) => {
					if (err)
						return res.status(500).send(err);
					return res.sendStatus(200);
				});
			})
			.catch((err) => res.status(500).send(err));
	});

	router.get('/all', (req, res) => {
		async.waterfall([
			(next) => {
				auth.generateFormToken()
					.then((token) => next(null, token))
					.catch((err) => next(err));
			},
			(token, next) => {
				let vd = { FormToken: token };
				db.Rsvp.findAll()
					.then((rsvps) => next(null, Object.assign(vd, { RSVPs: _.pluck(rsvps, 'dataValues') })))
					.catch((err) => next(err));
			}
		], (err, viewData) => {
			if (err){
				console.error(err.stack || err);
				return res.status(500).send({ success: false, error: err });
			}
			res.render('rsvp/all', viewData);
		});
	});

	router.get('/export', (req, res) => {
		db.Rsvp.findAll()
			.then((rsvps) => {
				rsvps = _.map(rsvps, (rsvp) => {
					rsvp.dataValues = _.omit(rsvp.dataValues, (value, key) => key === 'updatedAt' || key === 'id');
					return rsvp;
				});
				let columns = _.map(_.first(rsvps).dataValues, (value, key) => {
					let ret = { caption: key.capitalize() };
					let type = 'string';
					if (_.isNumber(value))
						type = 'number';
					else if (_.isBoolean(value))
						type = 'boolean';
					return _.extend(ret, { type: type });
				});
				let rows = _.map(rsvps, (rsvp) => _.values(rsvp.dataValues));

				let spreadsheet = excel.export(columns, rows, 'RSVPs');

				res.setHeader('Content-Type', 'application/vnd.openxmlformats');
				res.setHeader('Content-Disposition', `attachment; filename=RSVP_Report.xlsx`);
				res.end(spreadsheet, 'binary');
			})
			.catch((err) => {
				console.error(err);
				res.status(500).send({ success: false, error: err });
			});
	});

	router.post('/delete', (req, res) => {
		if (!req.body.rsvpid || req.body.rsvpid <= 0)
			return res.status(500).send({ success: false, error: 'Invalid RSVP ID' });

		db.Rsvp.destroy({
			where: {
				id: req.body.rsvpid
			}
		})
			.then((numDeleted) => res.status(200).send({ success: true }))
			.catch((err) => res.status(500).send({ success: false, error: err.stack || err }));
	});

	router.post('/create', (req, res) => {
		if (!req.body.token)
			return res.status(500).send({ success: false, error: 'Invalid form token' });

		async.series([
			(next) => {
				auth.verifyFormToken(req.body.token)
					.catch((err) => next(err))
					.then((valid) => {
						if (!valid)
							return next('Invalid form token');
						next();
					});
			},
			(next) => {
				db.Rsvp.create(Object.assign(req.body, {
					isAttending: JSON.parse(req.body.isAttending),
					attendees: JSON.parse(req.body.attendees || '0'),
					vegetarianMeal: JSON.parse(req.body.vegetarianMeal)
				}))
					.catch((err) => next(err))
					.then((newRsvp) => next());
			}
		], (err) => {
			if (err){
				console.error(err.stack || err);
				return res.status(500).send({ success: false, error: err });
			}
			res.send({ success: true });
		});
	});

	return router;
};
