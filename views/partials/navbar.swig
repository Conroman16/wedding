<nav class="navbar navbar-toggleable-md navbar-light topnav">
	<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
			aria-expanded="false" aria-label="Menu">
		<span class="navbar-toggler-icon"></span>
	</button>
	<a class="navbar-brand" href="/">
		<img src="/static/img/favicon.ico" alt="logo" class="logo align-middle" width="32px" />
	</a>
	<div class="collapse navbar-collapse align-middle" id="navbarNav">
		<ul class="navbar-nav mr-auto">
			{#<li class="nav-item">#}
				{#{% if RsvpEnabled %}<a class="nav-link" href="/rsvp">RSVP</a>{% endif %}#}
			{#</li>#}
			{#<li class="nav-item">#}
				{#{% if IsNotAuthed %}<a class="nav-link" href="{{ LoginPath }}">Login</a>{% endif %}#}
			{#</li>#}
			<li class="nav-item">
				<a href="/#home" class="nav-link nav-tab-link active-default" data-slug="home">Home</a>
			</li>
			<li class="nav-item">
				<a href="/#accommodations" class="nav-link nav-tab-link" data-slug="accommodations">Accommodations</a>
			</li>
			<li class="nav-item">
				<a href="/#registry" class="nav-link nav-tab-link" data-slug="registry">Registry</a>
			</li>
			<li class="nav-item">
				<a href="/#weddingparty" class="nav-link nav-tab-link" data-slug="weddingparty">Wedding Party</a>
			</li>
			<li class="nav-item">
				<a href="/#events" class="nav-link nav-tab-link" data-slug="events">Ceremony & Reception</a>
			</li>
			<li class="nav-item">
				<a href="/#requestasong" class="nav-link nav-tab-link" data-slug="requestasong">Request a Song</a>
			</li>
			{% if IsAuthed %}
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Admin</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
					<a class="dropdown-item" href="/server">Server</a>
					<a class="dropdown-item" href="/rsvp/all">All RSVPs</a>
					<a class="dropdown-item" href="{{ LogoutPath }}">Logout</a>
				</div>
			</li>
			{% endif %}
		</ul>
	</div>
	{#<div class="countdown-wrap invisible navbar-text">#}
		{#<span class="countdown"></span>#}
		{#<div><small>until the ceremony begins</small></div>#}
	{#</div>#}
</nav>
