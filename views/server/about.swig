{% extends '../layout.swig' %}

{% block style %}
<style>
	table{
		border-collapse: collapse;
	}
	td{
		padding: 0.5em 1em
	}
	table, tr, td{
		border: 1px solid;
	}
</style>
{% endblock %}

{% block body %}
<table>
	{% for item in items %}
	<tr>
		<td><strong>{{ item.key|title }}</strong></td><td>{{ item.value }}</td>
	</tr>
	{% endfor %}
</table>
{% endblock %}

{% block scripts %}
{% endblock %}
