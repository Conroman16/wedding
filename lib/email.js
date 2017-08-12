let config = require('./config');
let Mailgun = require('mailgun-js');
let swig = require('swig-templates');
let juice = require('juice');
let _ = require('underscore');

let email = {

	mailgun: Mailgun({ apiKey: config.mailgunApiKey, domain: config.mailgunDomain }),

	templates: {
		basic: './views/templates/email/basic.swig',
		rsvpPost: './views/templates/email/rsvppost.swig',
		rsvpConfirmation: './views/templates/email/rsvpconfirm.swig',
		songRequest: './views/templates/email/songrequest.swig'
	},

	templateCache: {},

	init: () => {
		email.preCompileTemplates();
	},

	preCompileTemplates: () => {
		_.each(email.templates, (path) => email.templateCache[path] = swig.compileFile(path));
		console.log('Email template pre-compilation completed');
	},

	renderTemplate: (template, data) => {
		let compiledTemplate = email.templateCache[template] || swig.compileFile(template || email.templates.basic);
		return compiledTemplate(data);
	},

	sendEmail: (to, subject, viewData, template) => {
		return new Promise((resolve, reject) => {

			if (!to || !subject || !viewData) {
				console.error('Invalid arguments');
				return reject({ error: 'invalid arguments' });
			}

			let messageData = {
				to: to,
				subject: subject,
				from: config.emailSender,
				html: juice(email.renderTemplate(template, viewData))
			};

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
