{% extends '../layout.swig' %}

{% block body %}
    <form id="login-form" method="post">
        <label for="username">Email:</label>
        <input type="text" class="email" name="username" />

        <label for="password">Password:</label>
        <input type="password" class="password" name="password" />

        <input type="submit" value="Log In">
    </form>
    <br>
    <a href="{{ RegisterPath }}">Register</a>
{% endblock %}

{% block scripts %}
	<script>
		var loginPath = '{{ LoginPath }}';
		var loginUrl = loginPath + (req.search || '');
		$(function(){
			$('#login-form').attr('action', loginUrl);
		});
	</script>
{% endblock %}
