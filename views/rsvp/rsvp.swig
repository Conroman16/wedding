{% extends '../layout.swig' %}

{% block body %}
	<div class="container">
		<br><br>
		<div class="row">
			<div class="col"></div>
			<div class="col-4">
				<form class="form rsvp-form">
					<input type="hidden" class="form-control input" name="token" value="{{ token }}" />

					<input type="text" class="form-control input" name="name" placeholder="NAME" aria-label="Name" required />
					<input type="text" class="form-control input" name="email" placeholder="EMAIL" aria-label="Email address" match=".+@.+\..+" required />
					<input type="tel" class="form-control input" name="phone" placeholder="PHONE" aria-label="Phone number" minlength="10" />

					<fieldset class="form-group">
						<legend>Attending</legend>
						<div class="form-check form-check-inline">
							<label class="form-check-label">
								<input type="radio" class="form-check-input input" name="attending" value="1" checked />
								Yes
							</label>
						</div>
						<div class="form-check form-check-inline">
							<label class="form-check-label">
								<input type="radio" class="form-check-input input" name="attending" value="0" />
								No
							</label>
						</div>
					</fieldset>

					<input type="text" class="form-control input" name="attendees" placeholder="EXTRA GUESTS" aria-label="Name" />
					<textarea class="form-control input multiline" name="message" placeholder="MESSAGE" aria-label="Message"></textarea>

					<div class="submit-wrap">
						<input type="submit" class="submit btn pull-right clearfix" value="SUBMIT" />
					</div>
				</form>
			</div>
			<div class="col"></div>
		</div>
	</div>
{% endblock %}

{% block scripts %}
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.0/jquery.mask.min.js"></script>
	<script src="/static/js/rsvp.js"></script>
{% endblock %}
