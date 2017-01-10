let config = require('./config');
let Mailgun = require('mailgun-js');
let swig = require('swig-templates');
let juice = require('juice');

let email = {

	from: config.emailSender,
	templates: {
		basic: './views/mailtemplates/basic.swig'
	},
	mailgun: Mailgun({ apiKey: config.mailgunApiKey, domain: config.mailgunDomain }),

	renderTemplate: (template, data) => {
		let compiledTemplate = swig.compileFile(template || email.templates.basic);
		return compiledTemplate(data);
	},

	sendEmail: (to, subject, viewData, template) => {
		if (!to || !viewData)
			return console.error('Invalid arguments');

		let messageData = {
			to: to,
			subject: subject,
			from: email.from,
			html: juice(email.renderTemplate(template, viewData))
		};

		return new Promise((resolve, reject) => {
			email.mailgun.messages().send(messageData, (error, body) => {
				if (error)
					reject(error);
				else
					resolve(body);
			});
		});
	}
};

module.exports = email;
