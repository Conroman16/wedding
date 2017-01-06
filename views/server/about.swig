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
<div class="grid">
	<div class="col-1-1"><br><br></div>
	<div class="col-1-1">
		<table style="width:100%;">
			{% for item in items %}
				<tr>
					<td><strong>{{ item.key|title }}</strong></td><td>{{ item.value }}</td>
				</tr>
			{% endfor %}
		</table>
	</div>
	<div class="col-1-1"><br><br></div>
	{% for node in nodes %}
	<div class="col-1-{{ nodes.length }}">
		<table>
			<tr>
				<td colspan="4" style="text-align:center;">
					<strong>Node {{ node.id }}</strong>
				</td>
			</tr>
			<tr>
				<td><strong>Status</strong></td>
				<td>{{ node.status }}</td>
			</tr>
			<tr>
				<td><strong>Memory</strong></td>
				<td>{{ node.memory }}</td>
			</tr>
			<tr>
				<td><strong>CPU</strong></td>
				<td>{{ node.cpu }}</td>
			</tr>
			<tr>
				<td><strong>Uptime</strong></td>
				<td>{{ node.uptime }}</td>
			</tr>
			<tr>
				<td><strong>Unstable Restarts</strong></td>
				<td>{{ node.unstableRestarts }}</td>
			</tr>
		</table>
	</div>
	{% endfor %}
</div>
{% endblock %}

{% block scripts %}
{% endblock %}
