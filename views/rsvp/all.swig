{% extends '../layout.swig' %}

{% block body %}
	<div class="container all-rsvps-container">
		<div class="row new-rsvp-row">
			<div class="col">
				<button class="new-rsvp-btn btn btn-success align-left">+ Add New</button>
				<div class="new-rsvp-form-wrap hide">
					<form class="new-rsvp-form form-inline" action="/rsvp/create">
						<input class="form-token" type="hidden" value="{{ FormToken }}" />

						<input class="form-control input" type="text" name="name" placeholder="Name" />

						<input class="form-control input" type="text" name="email" placeholder="Email" />

						<input class="form-control input" type="text" name="phone" placeholder="Phone" />

						<div class="form-check">
							<label class="form-check-label">
								<input class="form-check-input input" type="checkbox" name="isAttending"> Is Attending
							</label>
						</div>

						<input class="form-control input" type="text" name="attendees" placeholder="Attendees" />

						<textarea class="form-control input" name="message" placeholder="Message"></textarea>

						<div class="form-check">
							<label class="form-check-label">
								<input class="form-check-input input" type="checkbox" name="vegetarianMeal"> Vegetarian Meal
							</label>
						</div>

						<div class="submit-btn-wrap">
							<button type="submit" class="btn btn-submit pull-right">Submit</button>
						</div>
					</form>
				</div>
			</div>
			<div class="col-1">
				<a class="btn btn-secondary rsvp-export-btn" href="/rsvp/export">Export</a>
			</div>
		</div>
		<div class="row row-labels">
			<div class="col">Name</div>
			<div class="col">Email Address</div>
			<div class="col">Phone Number</div>
			<div class="col">Is Attending</div>
			<div class="col">Attendees</div>
			<div class="col">Vegetarian Meal</div>
			<div class="col">Message</div>
			<div class="col">Timestamp</div>
			<div class="col"></div>
		</div>
		<div class="rows">
			{% for rsvp in RSVPs %}
			<div class="row rsvp-row">
				<div class="col">
					{{ rsvp.name }}
				</div>
				<div class="col">
					{{ rsvp.email }}
				</div>
				<div class="col">
					{{ rsvp.phone }}
				</div>
				<div class="col">
					{{ rsvp.isAttending }}
				</div>
				<div class="col">
					{{ rsvp.attendees }}
				</div>
				<div class="col">
					{{ rsvp.vegetarianMeal }}
				</div>
				<div class="col">
					{{ rsvp.message }}
				</div>
				<div class="col">
					{{ rsvp.updatedAt|format('MM/DD/YYYY h:mm a') }}
				</div>
				<div class="col row-controls">
					<button class="btn btn-danger rsvp-delete-btn" data-rsvpid="{{ rsvp.id }}">Delete</button>
				</div>
			</div>
			{% endfor %}
		</div>
	</div>
{% endblock %}

{% block scripts %}
<script src="/static/js/rsvpadmin.js"></script>
{% endblock %}
