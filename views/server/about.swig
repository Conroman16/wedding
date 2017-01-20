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
<div class="container">
	<br><br>
	<div class="row">
		<div class="col">
			<table class="max-width">
				{% for item in items %}
					<tr>
						<td><strong>{{ item.key|title }}</strong></td><td>{{ item.value }}</td>
					</tr>
				{% endfor %}
			</table>
		</div>
	</div>
	<br><br>
	<div class="row">
	{% for node in nodes %}
		<div class="col">
			<table>
				<tr>
					<td colspan="4" class="center">
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
</div>
{% endblock %}

{% block scripts %}
{% endblock %}
