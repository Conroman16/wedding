{% extends '../layout.swig' %}

{% block style %}
<style>
	td{
		padding: 0.5em 1em
	}
	table, tr, td{
		border: 1px solid;
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
		    console.log('DATA', data);
		    $('.server-page').html(templates.serverPage(data));
		})
		.fail()
		.always(function(){
		    loader.hideLoading();
		});
})
</script>
{% endblock %}
