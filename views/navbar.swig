<nav class="navbar navbar-toggleable-md navbar-light bg-faded topnav">
	<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
			aria-expanded="false" aria-label="Menu">
		<span class="navbar-toggler-icon"></span>
	</button>
	<a class="navbar-brand" href="/">
		<img src="/static/img/favicon.ico" alt="logo" class="logo" width="32px" />
	</a>
	<div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav">
			<li class="nav-item active">
				<a class="nav-link" href="/">Home</a>
			</li>
			<li class="nav-item hide">
				<a class="nav-link" href="/rsvp">RSVP</a>
			</li>
			<li>
				{% if IsAuthed %}<a class="nav-link" href="{{ LogoutPath }}">Logout</a>{% endif %}
				{% if IsNotAuthed %}<a class="nav-link" href="{{ LoginPath }}">Login</a>{% endif %}
			</li>
		</ul>
	</div>
	<span class="navbar-text countdown invisible"></span>
</nav>
