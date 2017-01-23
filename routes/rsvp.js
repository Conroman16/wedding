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
		auth.generateFormToken()
			.then((token) => res.render('rsvp/rsvp', { token }))
			.catch((err) => res.status(500).send(err));
	});

	router.post('/', (req, res) => {
		if (!req.body.token)
			return res.status(500).send({ error: 'Invalid form token' });
		else if (!req.body.name || !req.body.attending)
			return res.status(500).send({ error: 'Invalid value for name or attending' });

		auth.verifyFormToken(req.body.token)
			.then((valid) => {
				if (!valid)
					return res.sendStatus(500);

				let isAttending = JSON.parse(req.body.attending);
				let attendees = JSON.parse(req.body.attendees || '0');
				if (isAttending)
					attendees++;

				async.series([
					(next) => {
						db.Rsvp.create({
							name: req.body.name,
							email: req.body.email,
							phone: req.body.phone,
							message: req.body.message,
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
						email.sendEmail(req.body.email, 'RSVP Confirmation', {
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
		db.Rsvp.findAll()
			.then((rsvps) => {
				if (!rsvps || rsvps.length < 0)
					return res.send('nothing to show');
				return res.send(rsvps);
			})
			.catch((err) => res.status(500).send(err));
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
				res.status(500).send();
			});
	});

	return router;
};
