{% extends '../layout.swig' %}

{% block style %}
	<link rel="stylesheet" href="/static/css/authforms.css" />
{% endblock %}

{% block body %}
	<div class="login-form-wrap container">
		<div class="row">
			<div class="col"></div>
			<div class="col-5">
				<form id="login-form" method="post" class="auth-form">
					<div class="form-group row">
						<label for="username" class="col-2 col-form-label">Email</label>
						<div class="col-10">
							<input type="text" class="form-control email" name="username" />
						</div>
					</div>

					<div class="form-group row">
						<label for="password" class="col-2 col-form-label">Password</label>
						<div class="col-10">
							<input type="password" class="form-control password" name="password" />
						</div>
					</div>
					<div class="row">
						<div class="col"></div>
						<div class="col-2">
							<input type="submit" value="Log In">
						</div>
					</div>
				</form>
			</div>
			<div class="col"></div>
		</div>
	</div>
    {#<br>#}
    {#<a href="{{ RegisterPath }}">Register</a>#}
{% endblock %}

{% block scripts %}
	<script>
		var loginUrl = '{{ LoginPath }}' + (location.search || '');
		$(function(){
			$('#login-form').attr('action', loginUrl);
		});
	</script>
{% endblock %}
