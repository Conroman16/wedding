{% extends '../layout.swig' %}

{% block style %}
<link rel="stylesheet" href="/static/css/server.css" />
{% endblock %}

{% block body %}
<div class="server-page"></div>
{% endblock %}

{% block scripts %}
<script>
$(function(){
    loader.showLoading();
    $.get('/server/data')
		.done(function(data){
		    $('.server-page').html(templates.serverPage(data));
		})
		.fail(function(){
		    swal({
		        type: 'error',
				title: 'Error',
				text: 'There was an error loading the server page'
			});
		})
		.always(function(){
		    loader.hideLoading();
		});
})
</script>
{% endblock %}
