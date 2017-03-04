{% extends '../layout.swig' %}

{% block body %}
	{#<div class="header-bg bg-lazyload" data-url="/static/img/background.jpg" data-blur="true">#}
	{#<div class="header-bg">#}
		{#<div class="container">#}
			{#<div class="row align-items-center">#}
				{#<div class="col-lg-12">#}
					{#<div class="banner-text">#}
						{#<h1>C + J</h1>#}
						{#<h2>Yep, that's right, we're tying the knot!</h2>#}
					{#</div>#}
				{#</div>#}
			{#</div>#}
		{#</div>#}
	{#</div>#}
    {#<br>#}


	<div class="container">
		<section class="tabs-wrapper">
			<div class="tabs row">
				<div class="tab-item col-xl active">
					<span class="text">Accommodations</span>
				</div>
				<div class="tab-item col-xl">
					Registry
				</div>
				<div class="tab-item col-xl">
					Wedding Party
				</div>
				<div class="tab-item col-xl">
					Ceremony & Reception
				</div>
				<div class="tab-item col-xl">
					Menu
				</div>
				<div class="tab-item col-xl">
					Request a Song
				</div>
			</div>
			{#<ul class="tabs row">#}
				{#<li class="tab-item active col-xl-2">Accommodations</li>#}
				{#<li class="tab-item col-xl-2">Registry</li>#}
				{#<li class="tab-item col-xl-2">Wedding Party</li>#}
				{#<li class="tab-item col-xl-2">Ceremony & Reception</li>#}
				{#<li class="tab-item col-xl-2">Menu</li>#}
				{#<li class="tab-item col-xl-2">Request a Song</li>#}
			{#</ul>#}

			<ul class="tab__content">
				<li class="tab-item active">
					<div class="content__wrapper">
						<h2 class="text-color">Accommodations</h2>
						<p>
							A limited number of rooms have been reserved at the
							<a href="#">Courtyard Marriott at Briarcliff</a>.

							For reservations at a reduced rate, please call and reserve your rooms under the <strong>"Duncan Kennedy Wedding"</strong>, or by following the reservation link
							below.
						</p>
						<p>
							Courtyard by Marriott Kansas City at Briarcliff
							4000 North Mulberry Drive
							Kansas City, MO 64116
							<a href="tel:8168413300">(816) 841-3300</a>
						</p>
					</div>
				</li>
				<li class="tab-item">
					<div class="content__wrapper">
						<h2 class="text-color">Registry</h2>
					</div>
				</li>
				<li class="tab-item">
					<div class="content__wrapper">
						<h2 class="text-color">Wedding Party</h2>
						<h3>The Ladies</h3>
						<ul>
							<li>
								<strong>Larissa Clark</strong>
								Matron of Honor
							</li>
							<li>
								<strong>Alaina Triplett</strong>
								Bridesmaid
							</li>
							<li>
								<strong>Rachel Soliday</strong>
								Bridesmaid
							</li>
							<li>
								<strong>Lizzy Hansen</strong>
								Bridesmaid
							</li>
						</ul>

						<h3>The Gents</h3>
						<ul>
							<li>
								<strong>Nicholas Clark</strong>
								Best Man
							</li>
							<li>
								<strong>Ben Cooper</strong>
								Groomsman
							</li>
							<li>
								<strong>Jeff Green</strong>
								Groomsman
							</li>
							<li>
								<strong>Evan Mills</strong>
								Groomsman
							</li>
							{#<li>#}
								{#<strong>Corbin Soliday</strong>#}
								{#Usher#}
							{#</li>#}
							{#<li>#}
								{#<strong>Antonio Griffin</strong>#}
								{#Usher#}
							{#</li>#}
						</ul>
					</div>
				</li>
				<li class="tab-item">
					<div class="content__wrapper">
						<h2 class="text-color">Ceremony & Reception</h2>
						<dl>
							<dt>Location:</dt>
							<dd>Olde Mill Emporium</dd>
							<dd>168 S. Main St.</dd>
							<dd>Parkville, MO 64152</dd>
							<dt>Date:</dt>
							<dd>October 14, 2017 at 6 pm</dd>
							<dd>Reception to follow</dd>
						</dl>
					</div>
				</li>
				<li class="tab-item">
					<div class="content__wrapper">
						<h2 class="text-color">Menu</h2>
						<p>
							<a href="http://www.twoguysandagrill.biz/">Two Guys and a Grill</a> will be catering dinner.
							Please mark on your RSVP if you would prefer to have a vegan brisket made with seitan.
						</p>
					</div>
				</li>
				<li class="tab-item">
					<div class="content__wrapper">
						<h2 class="text-color">Request a Song</h2>
						<p>
							Do you know a song that you'd really like played at the wedding reception? Is there one that you'd just
							cry for eight hours if you didn't get to dance to it? Well, worry no more, because we'd love for you to
							send us your song requests for the reception! All you need to do is email your requests to us.
						</p>
					</div>
				</li>
			</ul>
		</section>
	</div>


	{#<ul class="nav nav-tabs" role="tablist">#}
		{#<li class="nav-item fp-tab">#}
			{#<a class="nav-link active" data-toggle="tab" href="#accommodations" role="tab">Accommodations</a>#}
		{#</li>#}
		{#<li class="nav-item fp-tab">#}
			{#<a class="nav-link" data-toggle="tab" href="#tab2" role="tab">Another title</a>#}
		{#</li>#}
		{#<li class="nav-item fp-tab">#}
			{#<a class="nav-link" data-toggle="tab" href="#tab3" role="tab">Messages</a>#}
		{#</li>#}
	{#</ul>#}

	{#<div class="tab-content">#}
		{#<div class="tab-pane active" id="accommodations" role="tabpanel">#}
			{#<p>#}
				{#A limited number of rooms have been reserved at the#}
				{#<a href="#">Courtyard Marriott at Briarcliff</a>.#}

				{#For reservations at a reduced rate, please call and reserve your rooms under the <strong>"Duncan Kennedy Wedding"</strong>, or by following the reservation link#}
				{#below.#}
			{#</p>#}
			{#<p>#}
				{#Courtyard by Marriott Kansas City at Briarcliff#}
				{#4000 North Mulberry Drive#}
				{#Kansas City, MO 64116#}
				{#<a href="tel:8168413300">(816) 841-3300</a>#}
			{#</p>#}
		{#</div>#}
		{#<div class="tab-pane" id="tab2" role="tabpanel">#}
			{#<p>#}
				{#34563456346534563456Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in massa id enim feugiat elementum. Ut accumsan neque finibus#}
				{#consequat ultricies. Donec a libero neque. Cras fringilla tortor ut semper bibendum. Maecenas malesuada velit a tempor porttitor. Sed vitae scelerisque arcu. Phasellus sed cursus mauris. Vivamus molestie lobortis lectus, id euismod augue sollicitudin vitae. In lobortis et enim vitae efficitur. Nullam interdum, nunc non bibendum eleifend, magna urna dapibus leo, nec euismod orci est a tellus. In quis sodales urna. Aliquam condimentum bibendum metus nec tempor. Ut eleifend ipsum nisl, eget porta ligula vehicula vel. Vestibulum sollicitudin ullamcorper nunc, feugiat accumsan orci dapibus id. Phasellus aliquet eget dui eu faucibus. Suspendisse urna eros, tristique ultrices augue ac, blandit facilisis magna.#}
			{#</p>#}
		{#</div>#}
		{#<div class="tab-pane" id="tab3" role="tabpanel">#}
			{#<p>#}
				{#zzzzzzzzzzzzzzzzzzzzzzLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in massa id enim feugiat elementum. Ut accumsan neque finibus#}
				{#consequat ultricies. Donec a libero neque. Cras fringilla tortor ut semper bibendum. Maecenas malesuada velit a tempor porttitor. Sed vitae scelerisque arcu. Phasellus sed cursus mauris. Vivamus molestie lobortis lectus, id euismod augue sollicitudin vitae. In lobortis et enim vitae efficitur. Nullam interdum, nunc non bibendum eleifend, magna urna dapibus leo, nec euismod orci est a tellus. In quis sodales urna. Aliquam condimentum bibendum metus nec tempor. Ut eleifend ipsum nisl, eget porta ligula vehicula vel. Vestibulum sollicitudin ullamcorper nunc, feugiat accumsan orci dapibus id. Phasellus aliquet eget dui eu faucibus. Suspendisse urna eros, tristique ultrices augue ac, blandit facilisis magna.#}
			{#</p>#}
		{#</div>#}
	{#</div>#}
{% endblock %}

{% block scripts %}
{% endblock %}
