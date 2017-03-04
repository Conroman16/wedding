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
			<ul class="tabs row">
				<li class="active col-xl-2">Accommodations</li>
				<li class="col-xl-2">Favorite movies</li>
				<li class="col-xl-2">About</li>
				<li class="col-xl-2">Favorite movies</li>
				<li class="col-xl-2">About</li>
			</ul>

			<ul class="tab__content">
				<li class="active">
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
				<li>
					<div class="content__wrapper">
						<h2 class="text-color">Herro</h2>
					</div>
				</li>
				<li>
					<div class="content__wrapper">
						<h2 class="text-color">About</h2>

						<p>Created by <a class="text-color" href="http://lewihussey.com" target="_blank">Lewi Hussey</a></p>
					</div>
				</li>
				<li>
					<div class="content__wrapper">
						<h2 class="text-color">Herro</h2>
					</div>
				</li>
				<li>
					<div class="content__wrapper">
						<h2 class="text-color">About</h2>

						<p>Created by <a class="text-color" href="http://lewihussey.com" target="_blank">Lewi Hussey</a></p>
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
