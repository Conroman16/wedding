<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
	<title>{{PageTitle|default('index')|title}}</title>
	<link rel="shortcut icon" href="/static/img/favicon.ico" type="image/x-icon"/>
	<link rel="icon" href="/static/img/favicon.ico" type="image/ico"/>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
	<link rel="stylesheet" href="/static/css/main.css" />
	{% block style %}{% endblock %}
	<script>var config = {}</script>
    {#{% if IsProd %}#}
    {# -- ananytics -- #}
    {#{% endif %}#}
	{% if IsDev %}
		<link rel="stylesheet" href="/static/css/devdata.css" />
		<div id="dev-data-banner-wrap" class="clearfix">
			<div class="dev-data-banner">
				<p class="dev-data-banner-text">Dev Data</p>
			</div>
		</div>
	{% endif %}
</head>
<body>
<div class="body-wrap container">
	{% block body %}{% endblock %}
</div>
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-browser/0.1.0/jquery.browser.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
<script id="init">
	$(function(){
		if ($.browser.mobile)
			$('body').addClass('mobile');

		var fullSizeBgImgUrl = '/static/img/background.jpg';
		var bgImg = new Image();
		bgImg.onload = function(){
			$('body').addClass('loaded');
		};
		bgImg.src = fullSizeBgImgUrl;
	});
</script>
{% block scripts %}{% endblock %}
</body>
</html>
