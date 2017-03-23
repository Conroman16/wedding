<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=yes">
	<meta name="apple-mobile-web-app-capable" content="yes" />
	{% include 'partials/head.swig' %}
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css" integrity="sha256-iXUYfkbVl5itd4bAkFH5mjMEN5ld9t3OHvXX3IU8UxU=" crossorigin="anonymous" />
	<link rel="stylesheet" href="/static/css/main.css" />
	{% block style %}{% endblock %}
	{% include 'templates/client-templates.swig' %}
</head>
<body class="bg-lazyload" data-url="/static/img/brownpaper.jpg" data-blur="true">
{% include 'partials/navbar.swig' %}
<div class="body-wrap">
	{% block body %}{% endblock %}
</div>
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js" integrity="sha256-obZACiHd7gkOk9iIL/pimWMTJ4W/pBsKu+oZnSeBIek=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-browser/0.1.0/jquery.browser.min.js" integrity="sha256-R1IFHT0MWkbgu6vXgT4RE7TST4ROLDZRKtpRZeZ/Ke8=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js" integrity="sha256-egVvxkq6UBCQyKzRBrDHu8miZ5FOaVrjSqQqauKglKc=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/swig/1.4.1/swig.min.js" integrity="sha256-BKsa9gvc2mMcc2FH9VkoaAxnOhCn51AbSnpJLIgm1P8=" crossorigin="anonymous"></script>
<script>window.swig || document.write('<script src="/static/cdnbackup/swig.js"><\/script>')</script>
<script src="/static/js/swigfilters.js"></script>
<script src="/static/js/loader.js"></script>
<script src="/static/js/lazyload.js"></script>
<script id="init">
	window.swig.setDefaults({
		varControls: [ '<{', '}>' ],
		tagControls: [ '<%', '%>' ]
	});
	_.each(window.filters, function(filterFunc, name){
	    window.swig.setFilter(name, filterFunc);
	});

	$(function(){
		if ($.browser.mobile)
			$('body').addClass('mobile');

		window.templates = window.templates || {};

		var templs = $('script[type="text/x-swig-template"]');
		_.each(templs, function(temp){
			var templ = $(temp);
			var templName = templ.data('name') || templ.attr('id').replace(/-/g, '_');
			window.templates[templName] = window.swig.compile(templ.html());
		});

		window.lazyloader.init();
		if (window.countdown)
			window.countdown.bind('.countdown');
	});
</script>
{% include 'partials/postinit.swig' %}
{% block scripts %}{% endblock %}
</body>
</html>
