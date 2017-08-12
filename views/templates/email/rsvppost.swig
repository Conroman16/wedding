<style>
	.rsvp-data-table{
		border-collapse: collapse;
	}
	.rsvp-data-table,
	.rsvp-data-table tr,
	.rsvp-data-table tr td{
		border: 1px solid black;
	}
	.rsvp-data-table tr td{
		padding: 0.5em 0.75em;
	}
	.rsvp-data-table tr td:first-child{
		font-weight: bold;
	}
	.rsvp-data-table tr td:nth-child(2) {
		text-align: center;
	}
</style>
<div class="main-wrapper">
	<p>A wedding RSVP was posted with the following parameters</p>
	<table class="rsvp-data-table">
		<tr>
			<td>Name</td>
			<td>{{ name }}</td>
		</tr>
		<tr>
			<td>Email</td>
			<td>{{ email }}</td>
		</tr>
		<tr>
			<td>Is Attending?</td>
			<td>{{ isAttending }}</td>
		</tr>
		{% if isAttending %}
		<tr>
			<td>Attendees</td>
			<td>{{ attendees }}</td>
		</tr>
		{% endif %}
		<tr>
			<td>Vegetarian Meal?</td>
			<td>{{ vegetarianMeal }}</td>
		</tr>
		{% if message %}
		<tr>
			<td>Message</td>
			<td>{{ message }}</td>
		</tr>
		{% endif %}
	</table>
</div>
