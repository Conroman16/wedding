{% extends '../layout.swig' %}

{% block body %}
	<div class="container">
		<div class="row">
			<div class="col header-img-wrap">
				<img src="/static/img/heart.png" class="header-img" />
			</div>
		</div>
		<div class="tabs row">
			<div class="tab-item col-xl active-default" data-slug="home">
				<span class="text">Home</span>
			</div>
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
			<li class="tab-content active-default" data-slug="home">
				<div class="content__wrapper">
					<div class="row align-items-center">
						<div class="col-lg-12">
							<div class="banner-text">
								<h1>C + J</h1>
								<h2>Yep, that's right, we're tying the knot!</h2>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li class="tab-content" data-slug="accommodations">
				<div class="content__wrapper">
					<div class="row">
						<div class="col-md-6">
							<p>
								A limited number of rooms have been reserved at the
								<a href="http://www.marriott.com/hotels/travel/mcino-courtyard-kansas-city-at-briarcliff/">Courtyard Marriott at Briarcliff</a>.
								<br>
								<dl>
									<dt>Courtyard by Marriott Kansas City at Briarcliff</dt>
									<dd>4000 North Mulberry Drive</dd>
									<dd>Kansas City, MO 64116</dd>
									<dd><a href="tel:8168413300">(816) 841-3300</a></dd>
								</dl>
								<br>
								For reservations at a reduced rate, please visit
								<a href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Duncan%20Kennedy%20Wedding%5Emcino%60DKWDKWA%7CDKWDKWB%60119.00%60USD%60false%604%6010/13/17%6010/15/17%609/22/17&app=resvlink&stop_mobi=yes">
									this page
								</a>
								or call and reserve your rooms under the
								<strong>"Duncan Kennedy Wedding"</strong>
							</p>
						</div>
						<div class="col-md-6">
							<iframe src="{{ HotelMapUrl }}" frameborder="0" style="border:0;width:100%;height:100%;" allowfullscreen></iframe>
						</div>
					</div>
				</div>
			</li>
			<li class="tab-content" data-slug="registry">
				<div class="content__wrapper">
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
			<li class="tab-content" data-slug="weddingparty">
				<div class="content__wrapper">
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
					</div>
				</div>
			</li>
			<li class="tab-content" data-slug="events">
				<div class="content__wrapper">
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
			<li class="tab-content" data-slug="requestasong">
				<div class="content__wrapper">
					<p>
						Do you know a song that you'd really like played at the wedding reception? Is there one that you'd just
						cry for eight hours if you didn't get to dance to it? Well, worry no more, because we'd love for you to
						send us your song requests for the reception! All you need to do is <a href="mailto:{{ AdminEmail }}">email</a> your requests to us.
					</p>
				</div>
			</li>
		</ul>
	</div>
{% endblock %}

{% block scripts %}
{% endblock %}
