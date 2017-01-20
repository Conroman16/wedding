{%  extends 'layout.swig' %}

{% block style %}
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
{% endblock %}

{% block body %}
	<div class="container">
		<div class="uc-wrap row">
			<div class="col"></div>
			<div class="col-7">
				<h1 class="uc-header">Under Construction</h1>
				<img class="uc-img" src="/static/img/under-construction-ring.png" />
				<p class="uc-body">
					This site is still under construction.  It will be up and running soon!
				</p>
			</div>
			<div class="col"></div>
		</div>
	</div>
{% endblock %}
