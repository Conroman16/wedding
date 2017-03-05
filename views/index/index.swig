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
		<div class="tabs-wrapper">
			<div class="tabs row">
				<div class="tab-item col-xl" data-slug="accommodations">
					<span class="text">Accommodations</span>
				</div>
				<div class="tab-item col-xl" data-slug="registry">
					<span class="text">Registry</span>
				</div>
				<div class="tab-item col-xl" data-slug="weddingparty">
					<span class="text">Wedding Party</span>
				</div>
				<div class="tab-item col-xl" data-slug="events">
					<span class="text">Ceremony & Reception</span>
				</div>
				<div class="tab-item col-xl" data-slug="requestasong">
					<span class="text">Request a Song</span>
				</div>
			</div>

			<ul class="tab__content">
				<li class="tab-item active-default" data-slug="accommodations">
					<div class="content__wrapper">
						<h2 class="tab-header">Accommodations</h2>
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
				<li class="tab-item" data-slug="registry">
					<div class="content__wrapper">
						<h2 class="tab-header">Registry</h2>
						<a href="https://www.amazon.com/wedding/share/kennedystietheknot">Amazon</a>
						<a href="https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?registryId=544219735&eventType=Wedding">
							Bed, Bath, and Beyond
						</a>
						<strong>** If you would like to send something directly to our house, please send to.</strong>
						<dl>
							<dt>Connor & Julia</dt>
							<dd>1903 NW 70th St</dd>
							<dd>Kansas City, MO 64151</dd>
						</dl>
					</div>
				</li>
				<li class="tab-item" data-slug="weddingparty">
					<div class="content__wrapper">
						<h2 class="tab-header">Wedding Party</h2>
						<div class="row">
							<div class="col-md-6">
								<h3>The Ladies</h3>
								<ul class="nostyle">
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
							</div>
							<div class="col-md-6">
								<h3>The Gents</h3>
								<ul class="nostyle">
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
									<li>
										<strong>Corbin Soliday</strong>
										Usher
									</li>
									<li>
										<strong>Antonio Griffin</strong>
										Usher
									</li>
								</ul>
							</div>
						</div>
					</div>
				</li>
				<li class="tab-item" data-slug="events">
					<div class="content__wrapper">
						<h2 class="tab-header">Ceremony & Reception</h2>
						<dl>
							<dt>Location</dt>
							<dd>Olde Mill Emporium</dd>
							<dd>168 S. Main St.</dd>
							<dd>Parkville, MO 64152</dd>
							<dt>Date</dt>
							<dd>October 14, 2017 at 6 pm</dd>
							<dd>Reception to follow</dd>
						</dl>
						<p>
							<a href="http://www.twoguysandagrill.biz/">Two Guys and a Grill</a> will be catering dinner.
							Please mark on your RSVP if you would prefer to have a vegan brisket made with seitan.
						</p>
					</div>
				</li>
				<li class="tab-item" data-slug="requestasong">
					<div class="content__wrapper">
						<h2 class="tab-header">Request a Song</h2>
						<p>
							Do you know a song that you'd really like played at the wedding reception? Is there one that you'd just
							cry for eight hours if you didn't get to dance to it? Well, worry no more, because we'd love for you to
							send us your song requests for the reception! All you need to do is email your requests to us.
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
{% endblock %}

{% block scripts %}
{% endblock %}
