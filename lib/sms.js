let config = require('./config');
let twilio = require('twilio');

twilio.__currentClient = twilio.__currentClient || twilio(config.twilioAccountSID, config.twilioAuthToken);

let sms = {

	client: twilio.__currentClient,

	send: (number, message) => {
		return new Promise((resolve, reject) => {
			sms.client.sendMessage({
				to: number,
				from: config.twilioNumber,
				body: message
			}, (err, response) => {
				if (err){
					console.error('SMS ERROR', err);
					return reject(err);
				}
				return resolve(response);
			});
		});
	}
};

module.exports = sms;
