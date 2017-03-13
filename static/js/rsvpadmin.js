$(function(){
	$('.new-rsvp-btn').click(function(){
		$('.new-rsvp-form-wrap').removeClass('hide');
		$(this).addClass('hide');
	});

	$('.new-rsvp-form').submit(function(ev){
		ev.preventDefault();
		var postData = {
			token: $('.new-rsvp-form .form-token').val(),
			name: $('.new-rsvp-form .input[name="name"]').val(),
			email: $('.new-rsvp-form .input[name="email"]').val(),
			phone: $('.new-rsvp-form .input[name="phone"]').val(),
			isAttending: $('.new-rsvp-form .input[name="isAttending"]').is(':checked'),
			attendees: $('.new-rsvp-form .input[name="attendees"]').val(),
			vegetarianMeal: $('.new-rsvp-form .input[name="vegetarianMeal"]').is(':checked'),
			message: $('.new-rsvp-form .input[name="message"]').val()
		};

		console.log(postData);
		$.post('/rsvp/create', postData)
			.done(function(){
				swal({
					title: 'Success!',
					text: 'The RSVP was created successfully',
					type: 'success'
				}, function(){
					window.location.reload();
				});
			})
			.fail(function(){
				swal({
					title: '😭',
					text: 'There was an error when creating the RSVP.  Please try again.',
					type: 'error'
				}, function(){
					window.location.reload();
				});
			});
	});

	$('.rsvp-delete-btn').click(function(){
		var $this = $(this);
		var rsvpID = $this.data('rsvpid');
		swal({
			title: 'Are you sure?',
			text: 'Are you sure you want to delete this RSVP?  This action is destructive and cannot be undone.  Make sure you know what you\'re doing.',
			type: 'error',
			showCancelButton: true,
			cancelButtonText: 'Get me outta here!',
			confirmButtonText: 'Yep, nuke it',
			closeOnConfirm: false,
			showLoaderOnConfirm: true
		}, function(isConfirm){
			if (!isConfirm)
				return;

			$.post('/rsvp/delete', { rsvpid: rsvpID })
				.done(function(){
					$this.closest('.rsvp-row').remove();
					swal({
						type: 'success',
						title: 'Success!',
						text: 'The RSVP was deleted successfully'
					});
				})
				.fail(function(){
					swal({
						type: 'error',
						title: '😭',
						text: 'Error submitting delete request.  Please try again.'
					});
				});
		});
	});
});
