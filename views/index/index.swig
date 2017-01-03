{% extends '../layout.swig' %}

{% block body %}
    <h3>Hi</h3>
    <br>
	{%  if IsAuthed %}<a href="{{ LogoutPath }}">Logout</a>{% endif %}
	{%  if IsNotAuthed %}<a href="{{ LoginPath }}">Login</a>{% endif %}
{% endblock %}

{% block scripts %}
{% endblock %}
