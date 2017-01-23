{% extends '../layout.swig' %}

{% block style %}
<style>
	td{
		padding: 0.5em 1em
	}
	.host-row table, .host-row tr, .host-row td{
		border: 1px solid;
	}

	tr:not(:first-of-type){
		border-top: 1px solid rgba(0,0,0,0.3);
	}
</style>
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
