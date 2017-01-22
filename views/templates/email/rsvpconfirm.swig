<div class="main-wrapper">
	<h4>Thanks for your RSVP!</h4>
	<p>
		We've received your RSVP{% if Attending %} and you are now on the list{% endif %}!  Just to confirm, you will {% if NotAttending %}<strong>not</strong>
		{% endif %}be attending{% if NotAttending %}.{% endif %}
		{% if Attending %}
			and will be
			{% if AttendingAlone %}by yourself.{% endif %}
			{% if NotAttendingAlone %}
				bringing {{ Attendees }} other guest{% if MoreThanOneExtraGuest %}s{% endif %}.
			{% endif %}
		{% endif %}
	</p>
</div>
