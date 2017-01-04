{% extends '../layout.swig' %}

{% block body %}
	<form class="transparent">
		<input type="hidden" class="input" name="token" value="{{ token }}" />
		<input type="text" class="input" name="name" placeholder="NAME" aria-label="Name" required />
		<input type="text" class="input" name="email" placeholder="EMAIL" aria-label="Email address" match=".+@.+\..+" />
		<input type="tel" class="input" name="phone" placeholder="PHONE" aria-label="Phone number" minlength="10" />
		<textarea class="input multiline" name="message" placeholder="MESSAGE" aria-label="Message" required></textarea>
		<input type="submit" class="submit" value="SUBMIT" />
	</form>
{% endblock %}

{% block scripts %}
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.0/jquery.mask.min.js"></script>
	<script src="/static/js/contact.js"></script>
{% endblock %}
