let config = require('./config');
let Mailgun = require('mailgun-js');
let swig = require('swig-templates');
let juice = require('juice');

let email = {

	templates: {
		basic: './views/templates/email/basic.swig',
	},
	mailgun: Mailgun({ apiKey: config.mailgunApiKey, domain: config.mailgunDomain }),

	renderTemplate: (template, data) => {
		let compiledTemplate = swig.compileFile(template || email.templates.basic);
		return compiledTemplate(data);
	},

	sendEmail: (to, subject, viewData, template) => {
		if (!to || !subject || !viewData)
			return console.error('Invalid arguments');

		let messageData = {
			to: to,
			subject: subject,
			from: config.emailSender,
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
