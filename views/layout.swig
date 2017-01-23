<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=yes">
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<title>{{PageTitle|default('#KTTT17')}}</title>
	<link rel="shortcut icon" href="/static/img/favicon.ico" type="image/x-icon" />
	<link rel="icon" href="/static/img/favicon.ico" type="image/ico" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css" />
	<link rel="stylesheet" href="/static/css/main.css" />
	{% if IsDev %}
		<link rel="stylesheet" href="/static/css/devdata.css" />
		<div id="dev-data-banner-wrap" class="clearfix">
			<div class="dev-data-banner">
				<p class="dev-data-banner-text">Dev Data</p>
			</div>
		</div>
	{% endif %}
	{% block style %}{% endblock %}
	<script class="postinit-remove">
		window.config = {
	    	analyticsToken: '{{ GoogleAnalyticsID }}',
			weddingDate: '{{ EventDate }}',
			adminEmail: '{{ AdminEmail }}'
		}
	</script>
	{% include 'templates/client-templates.swig' %}
    {% if IsProd %}
     <script>
		 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		 })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
		 ga('create', config.analyticsToken, 'auto');
		 ga('send', 'pageview');
		 window.config.analyticsLoaded = true;
	 </script>
    {% endif %}
</head>
<body>
{% include 'partials/navbar.swig' %}
<div class="body-wrap">
	{% block body %}{% endblock %}
</div>
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-browser/0.1.0/jquery.browser.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/swig/1.4.1/swig.min.js"></script>
<script>window.swig || document.write('<script src="/static/cdnbackup/swig.js"><\/script>')</script>
<script src="/static/js/loader.js"></script>
<script src="/static/js/lazyload.js"></script>
<script src="/static/js/countdown.js"></script>
<script id="init">
	$(function(){
		if ($.browser.mobile)
			$('body').addClass('mobile');

		window.templates = window.templates || {};
		window.swig.setDefaults({
			varControls: [ '<{', '}>' ],
		    tagControls: [ '<%', '%>' ]
		});

		var templs = $('script[type="text/x-swig-template"]');
		$.each(templs, function(indx){
			var templ = $(templs[indx]);
			var templName = templ.data('name') || templ.attr('id').replace(/-/g, '_');
			window.templates[templName] = swig.compile(templ.html());
		});

		window.lazyloader.init();
		window.countdown.bind('.countdown');
	});
</script>
<script class="postinit-remove">
	$('.postinit-remove').remove();
</script>
{% block scripts %}{% endblock %}
</body>
</html>
