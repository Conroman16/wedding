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
	{#<style>#}
		{#.topnav {#}
			{#margin: auto;#}
			{#width: 100%;#}
			{#height: 94px;#}
			{#background-color: #ddd;#}
		{#}#}
		{#.logo {#}
			{#width: 42px;#}
			{#margin-top: 26px;#}
			{#margin-left: 37px;#}
		{#}#}
	{#</style>#}
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
{# Navigation #}
{#<nav class="navbar navbar-default topnav" role="navigation">#}
	{#<div class="container topnav">#}
		{# Brand and toggle get grouped for better mobile display #}
		{#<div class="navbar-header">#}
			{#<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="navbarcollapse">#}
				{#<span class="sr-only">Toggle navigation</span>#}
				{#<span class="icon-bar"></span>#}
				{#<span class="icon-bar"></span>#}
				{#<span class="icon-bar"></span>#}
			{#</button>#}
			{#<a class="navbar-brand" href="#"> <img src="https://cdn.zeplin.io/57f3766e32dea49c16230ace/assets/045A69CE-26BF-41D0-9849-0B3479877EB3.png" alt="logo" class="logo" width="50px" /> </a>#}
		{#</div>#}
		{# Collect the nav links, forms, and other content for toggling #}
		{#<div class="collapse navbar-collapse" id="navbarcollapse">#}
			{#<ul class="nav navbar-nav navbar-right">#}
				{#<li><a href="#"> Link </a></li>#}
				{#<li><a href="#"> action </a></li>#}
				{#<li><a href="#"> another action </a></li>#}
				{#<li><a href="#"> something else... </a></li>#}
			{#</ul>#}
		{#</div>#}
		{# /.navbar-collapse #}
	{#</div>#}
	{# /.container #}
{#</nav>#}
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
	});
</script>
{% block scripts %}{% endblock %}
</body>
</html>
