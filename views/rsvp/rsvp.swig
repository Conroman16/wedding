{% extends '../layout.swig' %}

{% block body %}
	<div class="container">
		<br><br>
		<div class="row">
			<div class="col"></div>
			<div class="col-6">
				<form class="form rsvp-form">
					<input type="hidden" class="form-control input" name="token" value="{{ token }}" />

					<div class="form-group">
						<label for="name">Name</label>
						<input type="text" class="form-control input" name="name" aria-label="Name" required />
					</div>

					<div class="form-group">
						<label for="email">Email Address</label>
						<input type="text" class="form-control input" name="email" aria-label="Email address" match=".+@+.+\..+" required />
					</div>

					<div class="form-group">
						<label for="phone">Phone Number</label>
						<input type="tel" class="form-control input" name="phone" aria-label="Phone number" minlength="10" />
					</div>

					<fieldset class="form-group">
						<label for="attending">Attending</label><br>
						<div class="form-check form-check-inline">
							<label class="form-check-label">
								<input type="radio" class="form-check-input input" name="attending" value="1" />
								Yes
							</label>
						</div>
						<div class="form-check form-check-inline">
							<label class="form-check-label">
								<input type="radio" class="form-check-input input default" name="attending" value="0" checked />
								No
							</label>
						</div>
					</fieldset>

					<div class="form-group attendees-group hide">
						<label for="attendees">Extra Guests</label>
						<div class="input-group">
							<span class="input-group-addon decrementer js-decrement-extra-guests">&ndash;</span>
							<input type="text" class="form-control input center" name="attendees" aria-label="Name" value="0" numonly />
							<span class="input-group-addon incrementer js-increment-extra-guests">+</span>
						</div>
					</div>

					<div class="form-check">
						<label class="form-check-label">
							<input class="form-check-input" type="checkbox">
							Include a message
						</label>
					</div>

					<div class="form-group">
						<label for="message">Message</label>
						<textarea class="form-control input multiline" name="message" aria-label="Message"></textarea>
					</div>

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
