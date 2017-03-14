<div class="main-wrapper">
	<h4>Song Requested</h4>
	<p>
		Someone has requested <strong>{{ name }}</strong> by <strong>{{ artist }}</strong>.
	</p>
	{% if notes %}
	<p><strong>They added some notes as well:</strong></p>
	<p>{{ notes }}</p>
	{% endif %}
</div>
