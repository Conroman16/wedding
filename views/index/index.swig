{% extends '../layout.swig' %}

{% block body %}
<div class="body-bg"></div>
<div class="container">
	<div class="row">
		<div class="col header-img-wrap">
			<img src="/static/img/heart_350px.png" class="header-img" />
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
							<h2>Yep, that's right, Connor and Julia are tying the knot!</h2>
							<br>
							<p>
								After nearly 5 years of great times together, Connor decided to seal the deal on Christmas Night at the
								<a href="http://www.magic-tree.org/" target="_blank">Magic Tree</a> in Columbia, MO.
							</p>
						</div>
						<div class="main-img-wrap">
							<img src="/static/img/engagement_surprise.jpg" class="main-img" />
						</div>
						<div class="countdown-wrap invisible">
							<span class="countdown" title="{{ EventDate|format('MMMM Do, YYYY') + ' at ' + EventDate|format('h:mma') }}"></span>
							<div><small>until the ceremony begins</small></div>
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
							<a href="http://www.marriott.com/hotels/travel/mcino-courtyard-kansas-city-at-briarcliff/" target="_blank">Courtyard Marriott at Briarcliff</a>.
							<br>
							<dl class="address-dl">
								<dt>Courtyard by Marriott Kansas City at Briarcliff</dt>
								<dd>4000 North Mulberry Drive</dd>
								<dd>Kansas City, MO 64116</dd>
								<dd><a href="tel:8168413300">(816) 841-3300</a></dd>
							</dl>
							<br>
							For reservations at a reduced rate, please visit
							<a href="http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Duncan%20Kennedy%20Wedding%5Emcino%60DKWDKWA%7CDKWDKWB%60119.00%60USD%60false%604%6010/13/17%6010/15/17%609/22/17&app=resvlink&stop_mobi=yes"
							   target="_blank">
								this page
							</a>
							or call and reserve your rooms under the
							<strong>"Duncan Kennedy Wedding"</strong>
						</p>
						<p>
							The deadline for room reservations is
							<strong><time datetime="{{ RoomReservationCloseDate }}">{{ RoomReservationCloseDate|format('MMMM Do, YYYY') }}</time></strong>
						</p>
					</div>
					<div class="col-md-6">
						<iframe class="map-frame" src="{{ HotelMapUrl }}" frameborder="0" allowfullscreen></iframe>
					</div>
				</div>
			</div>
		</li>
		<li class="tab-content" data-slug="registry">
			<div class="content__wrapper">
				<div class="row">
					<div class="col">
						<h2>You're so sweet to think of us!</h2>
						<p>You can access our various registries by clicking on the images below.</p>
					</div>
				</div>
				<br><br>
				<div class="row">
					<div class="col" target="_blank">
						<a href="https://www.honeyfund.com/wedding/KennedysTieTheKnot" target="_blank">
							<img class="registry-img" src="/static/img/honeyfund_logo.png" alt="HoneyFund" />
						</a>
					</div>
				</div>
				<br><br><br>
				<div class="row">
					<div class="col-md-6">
						<a href="https://www.amazon.com/wedding/share/kennedystietheknot" target="_blank">
							<img class="registry-img" src="/static/img/amazon_logo.png" alt="Amazon" />
						</a>
						<br><br><br>
					</div>
					<div class="col-md-6">
						<a href="https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?registryId=544219735&eventType=Wedding" target="_blank">
							<img class="registry-img" src="/static/img/bbnb_logo.png" alt="Bed, Bath & Beyond" />
						</a>
					</div>
				</div>
				<br><br><br>
				<div class="row">
					<div class="col">
						<strong>** If you would like to send something directly to our house, please send to:</strong>
						<br><br>
						<dl class="address-dl">
							<dt>Connor & Julia</dt>
							<dd>1903 NW 70th St</dd>
							<dd>Kansas City, MO 64151</dd>
						</dl>
					</div>
				</div>
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
						<br><br>
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
				<div class="row">
					<div class="col-md-6">
						<dl class="address-dl">
							<dt>Location</dt>
							<dd>Olde Mill Emporium</dd>
							<dd>168 S. Main St.</dd>
							<dd>Parkville, MO 64152</dd>
							<dt>Date</dt>
							<dd>October 14, 2017 at 6 pm</dd>
							<dd>Reception to follow</dd>
						</dl>
						<p>
							<a href="http://www.twoguysandagrill.biz/" target="_blank">Two Guys and a Grill</a> will be catering dinner.
							Please mark on your RSVP if you would prefer to have a vegan brisket made with seitan.
						</p>
					</div>
					<div class="col-md-6">
						<iframe class="map-frame" src="{{ VenueMapUrl }}" frameborder="0" allowfullscreen></iframe>
					</div>
				</div>
			</div>
		</li>
		<li class="tab-content" data-slug="requestasong">
			<div class="content__wrapper">
				<p>
					Do you know a song that you'd really like played at the wedding reception? Is there one that you'd cry for hours if you didn't dance to it?
					Well, worry no more, because we'd love for you to send us your song requests for the reception! All you need to do is
					<a href="mailto:{{ AdminEmail }}">email</a> your requests to us or fill out the form below.
				</p>
				<br>
				<div class="song-request-form-wrap">
					<form class="song-request-form" data-requestformtoken="true" data-tokentimeout="{{ '1000 * 60 * 5'|math }}">
						<input type="hidden" class="input form-auth-token" name="formtoken" />

						<div class="form-group">
							<strong><label for="songname">Song Name</label></strong>
							<input class="form-control input" name="songname" aria-label="songname" />
						</div>

						<div class="form-group">
							<strong><label for="artist">Artist</label></strong>
							<input class="form-control input" name="artist" aria-label="artist" />
						</div>

						<div class="form-group">
							<label for="notes"><strong>Notes or Comments</strong>&nbsp;<small>about your request</small></label>
							<textarea class="form-control input" name="notes" aria-label="notes"></textarea>
						</div>

						<div class="submit-wrap">
							<input type="submit" class="submit btn" value="Submit Request" />
						</div>
					</form>
				</div>
			</div>
		</li>
	</ul>
</div>
{% endblock %}

{% block scripts %}
<script src="/static/js/tabs.js"></script>
<script src="/static/js/countdown.js"></script>
<script>
	$(function(){
		window.countdown.bind('.countdown');
	    $('.song-request-form').submit(function(ev){
	        ev.preventDefault();
	        var postData = {
	            formtoken: encodeURIComponent($('.input.form-auth-token').val()),
				songname: encodeURIComponent($('.input[name="songname"]').val()),
				artist: encodeURIComponent($('.input[name="artist"]').val()),
				notes: encodeURIComponent($('.input[name="notes"]').val())
			};
	        $.post('/songrequest', postData)
				.fail(function(){
				    swal({
				        type: 'error',
						title: 'Uh oh!',
						html: true,
						text: 'An error occurred while attempting to submit your request.  Please try again.  If you continue to experience issues, you may also email ' +
						      'your request to us at <a href="mailto:{{ AdminEmail }}">{{ AdminEmail }}</a>.'
					});
				})
				.done(function(){
					$('.song-request-form .input').val('');
				    swal({
				        type: 'success',
						title: 'Success!',
						text: 'Your song request was submitted successfully!  Look forward to hearing it at the reception'
					});

				});
		});
	});
</script>
{% endblock %}
