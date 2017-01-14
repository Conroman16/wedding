let router = require('express').Router();
let auth = require('../lib/auth');
let email = require('../lib/email');
let db = require('../db');
let excel = require('../lib/excel');
let _ = require('underscore');

module.exports = () => {

	router.get('/', (req, res) => {
		auth.generateFormToken()
			.then((token) => res.render('rsvp/rsvp', { token }))
			.catch((err) => res.status(500).send(err));
	});

	router.post('/', (req, res) => {
		if (!req.body.token)
			return res.status(500).send({ error: 'Invalid form token' });
		else if (!req.body.name || !req.body.attending || !req.body.attendees)
			return res.status(500).send({ error: 'Invalid value for name, attending, or attendees' });

		auth.verifyFormToken(req.body.token)
			.then((valid) => {
				if (!valid)
					return res.sendStatus(500);

				email.sendEmail('cjtkennedy@gmail.com', 'RSVP Posted', { title: 'RSVP Posted', data: JSON.stringify(req.body) })
					.catch((err) => console.error('EMAIL ERROR', err))
					.then((response) => res.sendStatus(200));

				db.Rsvp.create({
					name: req.body.name,
					email: req.body.email,
					phone: req.body.phone,
					message: req.body.message,
					isAttending: req.body.attending,
					attendees: req.body.attendees
				}).then((newRsvp) => res.send(newRsvp))
				.catch((err) => res.status(500).send(err));
			})
			.catch((err) => res.status(500).send({ error: err }));
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
		console.log(db.Rsvp.$modelOptions);

		db.Rsvp.findAll()
			.then((rsvps) => {
				rsvps = _.map(rsvps, (rsvp) => {
					rsvp.dataValues = _.reject(rsvp.dataValues, (value, key) => key === 'updatedAt');
					return rsvp;
				});
				let columns = _.map(_.first(rsvps).dataValues, (value, key) => {
					let ret = { caption: key };
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
