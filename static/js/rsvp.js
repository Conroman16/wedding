$(function(){
	$('input[type="tel"]').mask('(000) 000-0000');
	$('input[numonly]').mask('0#');

	$('.form-control').on('keydown', function(){
		removeValidation($(this));
	});

	$('.submit').click(function(e){
		e.preventDefault();
		submitForm();
	});

	$('.js-increment-extra-guests').click(function(){
		var input = $('input[name="attendees"]');
		var value = JSON.parse(input.val() || '0');
		value++;
		input.val(value);
	});
	$('.js-decrement-extra-guests').click(function(){
		var input = $('input[name="attendees"]');
		var value = JSON.parse(input.val() || '0');
		value--;
		if (value < 0)
			value = 0;
		input.val(value);
	});

	var $attendingRadio = $('input[name="attending"]');
	var $attendeesGroup = $('.attendees-group');
	$attendingRadio.change(function(){
		var newVal = JSON.parse($(this).val());
		if (newVal)
			$attendeesGroup.removeClass('hide');
		else
			$attendeesGroup.addClass('hide');
	});
});

function removeValidation($input){
	$input.closest('.form-group').removeClass('has-danger');
	$input.removeClass('form-control-danger');
}

function clearForm(){
	$('.input[type="text"], .input[type="tel"], textarea.input').val('');
	$('.input[type="radio"].default, .input[type="check"].default').prop('checked', true);
	$('.attendees-group').addClass('hide');
}

function getValue($i){
	var val = undefined;
	try{
		val = $i.cleanVal();
	}
	catch (e) {
		val = $i.val();
	}
	return val.trim();
}

function invalidateInput($input){
	$input.closest('.form-group').addClass('has-danger');
	$input.addClass('form-control-danger');
}

function validateForm(){
	var $required = $('.input[required]');
	var $minLength = $('.input[minlength]');
	var $regex = $('.input[match]');
	var valid = true;

	$.each($required, function(i){
		var $input = $($required[i]);
		var text = getValue($input);
		if (text.length === 0){
			valid = false;
			invalidateInput($input);
		}
	});

	$.each($minLength, function(i){
		var $input = $($minLength[i]);
		var text = getValue($input);
		var minLength = $input.attr('minlength');
		var required = !!$input.attr('required');
		if (text.length < minLength){
			if (!required && text.length > 0){
				valid = false;
				invalidateInput($input);
			}
		}
	});

	$.each($regex, function(i){
		var $input = $($regex[i]);
		var regexStr = $input.attr('match');
		var regex = new RegExp(regexStr, 'gi');
		var required = !!$input.attr('required');
		var text = getValue($input);
		if (!regex.test(text)){
			console.log('hi');
			if (required && $input.val().length > 0) {
				valid = false;
				invalidateInput($input);
			}
		}
	});

	return valid;
}

function submitForm(){
	var $name = $('.input[name="name"]');
	var $email = $('.input[name="email"]');
	var $phone = $('.input[name="phone"]');
	var $attending = $('.input[name="attending"]:checked');
	var $attendees = $('.input[name="attendees"]');
	var $token = $('.input[name="token"]');
	var $message = $('.input[name="message"]');
	var url = location.pathname;

	if (validateForm()){
		var postData = {
			name: $name.val(),
			email: $email.val(),
			phone: $phone.val(),
			token: $token.val(),
			attending: !!JSON.parse($attending.val()),
			attendees: $attendees.val(),
			message: $message.val()
		};
		loader.showLoading('.rsvp-form');
		$.post(url, postData).done(function(data){
			swal({
				title: 'Thank you!',
				text: 'Your RSVP was submitted successfully.  You should receive a confirmation email shortly.',
				type: 'success'
			});
			if (config.analyticsLoaded)
				ga('send', 'pageview', url);
		}).fail(function(xhr, status, err){
			swal({
				title: 'Ah man!',
				text: 'There was an error submitting your rsvp 😭.  You should tell us about it at <a href="mailto:' + config.adminEmail + '.">' + config.adminEmail + '</a>',
				type: 'error',
				html: true
			});
			console.error('Error submitting rsvp', err);
		}).always(function(){
			clearForm();
			loader.hideLoading();
		});
	}
}
