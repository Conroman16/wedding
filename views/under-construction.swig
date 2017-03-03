<!DOCTYPE html>
<html>
<head>
	{% include 'partials/head.swig' %}
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
	<style>
		.uc-header,
		.uc-body{
			text-align: center;
		}
		.uc-img{
			display: block;
			margin: auto;
			padding: 2em;
		}
	</style>
</head>
<body>
	<br><br><br>
	<div class="container">
		<div class="uc-wrap row">
			<div class="col"></div>
			<div class="col-7">
				<h1 class="uc-header">Under Construction</h1>
				<img class="uc-img" src="/static/img/heart.png" width="450" />
				<p class="uc-body">
					This site is still under construction.  It will be up and running soon!
					<br>
					Check back on or after <time datetime="{{ AvailableDate }}"><strong>{{ AvailableDateString }}</strong></time>.
				</p>
			</div>
			<div class="col"></div>
		</div>
	</div>
	<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-browser/0.1.0/jquery.browser.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
	{% include 'partials/postinit.swig' %}
	<script>
		if (window.config.analyticsLoaded)
			ga('send', 'pageview', 'under-construction');
	</script>
</body>
</html>
