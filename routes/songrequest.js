let router = require('express').Router();
let auth = require('../lib/auth');
let email = require('../lib/email');
let config = require('../lib/config');
let async = require('async');
let db = require('../db');
let _ = require('underscore');

module.exports = () => {

	router.post('/', (req, res) => {
		async.waterfall([
			(next) => {
				auth.verifyFormToken(req.body.formtoken)
					.catch((err) => next(err))
					.then((valid) => {
						if (!valid)
							return next('Invalid form token');
						next();
					});
			},
			(next) => {
				db.SongRequest.create({
					name: req.body.songname,
					artist: req.body.artist,
					notes: req.body.notes
				})
					.catch((err) => next(err))
					.then((newSongRequest) => next(null, newSongRequest));
			},
			(newSongRequest, next) => {
				let messageData = {
					name: newSongRequest.name,
					artist: newSongRequest.artist,
					notes: newSongRequest.notes
				};
				email.sendEmail(config.adminEmail, 'Song Requested', messageData, email.templates.songRequest)
					.catch((err) => next(err))
					.then(() => next());
			}
		], (err) => {
			if (err) {
				console.error(err.stack || err);
				return res.status(500).send({success: false, error: err});
			}
			res.send({ success: true });
		});
	});

	router.get('/all', (req, res) => {
		db.SongRequest.findAll()
			.catch((err) => {
				console.error(err.stack || err);
				res.status(500).send({ success: false, error: err })
			})
			.then((songRequests) => res.send(songRequests));
	});

	return router;
};
