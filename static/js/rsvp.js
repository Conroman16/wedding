$(function(){
	$('input[type="tel"]').mask('(000) 000-0000');
	$('.submit').click(function(e){
		e.preventDefault();
		submitForm();
	});
});

function clearForm(){
	$('.input').val('').removeClass('invalid');
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

function validateForm(){
	var $required = $('.input[required]');
	var $minLength = $('.input[minlength]');
	var $regex = $('.input[match]');
	var valid = true;

	$('.input').removeClass('invalid');

	$.each($required, function(i){
		var $input = $($required[i]);
		var text = getValue($input);
		if (text.length === 0){
			$input.addClass('invalid');
			valid = false;
		}
	});

	$.each($minLength, function(i){
		var $input = $($minLength[i]);
		var text = getValue($input);
		var minLength = $input.attr('minlength');
		var required = !!$input.attr('required');
		if (text.length < minLength){
			if (!required && text.length > 0){
				$input.addClass('invalid');
				valid = false;
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
			if (!required && $input.val().length > 0) {
				$input.addClass('invalid');
				valid = false;
			}
		}
	});

	return valid;
}

function submitForm(){
	var $name = $('.input[name="name"]');
	var $email = $('.input[name="email"]');
	var $phone = $('.input[name="phone"]');
	var $attending = $('.input[name="attending"]');
	var $attendees = $('.input[name="attendees"]');
	var $token = $('.input[name="token"]');
	var $message = $('.input[name="message"]');
	var url = location.pathname;

	if (validateForm()){
		$.post(url, {
			name: $name.val(),
			email: $email.val(),
			phone: $phone.val(),
			token: $token.val(),
			attending: !!$attending.val(),
			attendees: $attendees.val(),
			message: $message.val()
		}).done(function(data){
			clearForm();
			if (config.gaLoaded)
				ga('send', 'pageview', url);
		}).fail(function(xhr, status, err){
			console.error('Error submitting rsvp', err);
		}).always(function(){
			clearForm();
		});
	}
}
