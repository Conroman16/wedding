$(function(){
	var defaultSlug = $('.active-default').data('slug');
	var slug = window.location.hash.replace('#', '') || defaultSlug;
	var tabLabel = $('.tab-item.active-default');
	var tabWrapper = $('.tab__content');

	if (slug === defaultSlug){
		tabLabel.removeClass('active-default');
		tabLabel.addClass('active');
	}
	else {
		tabLabel = $('.tab-item[data-slug="' + slug + '"]');
		tabLabel.addClass('active');
	}

	var activeTab = tabWrapper.find('[data-slug="' + slug + '"]');
	var activeTabHeight = activeTab.outerHeight();

	handleTabChange(slug, null, true);
	activeTab.show();
	tabWrapper.height(activeTabHeight);
	window.history.pushState({ slug: slug }, slug, './#' + slug);

	if (config.analyticsLoaded)
		ga('send', 'pageview', location.pathname + location.hash);

	function getFormAuthToken(form){
		var $form = $(form);
		$.post('/getformauthtoken')
			.done(function(data){
				$form.find('.form-auth-token').val(data.token);

				var tokenTimeout = JSON.parse($form.data('tokentimeout'));
				if (tokenTimeout){
					setTimeout(function(){
						$form.find('.form-auth-token').val('');
						getFormAuthToken(form);
					}, tokenTimeout);
				}
			});
	}
	function handleTabChange(newSlug, isFromPopstate, isInitialLoad) {
		console.log(newSlug, isFromPopstate, isInitialLoad);
		if (newSlug === 'rsvp')
			return;

		slug = newSlug;
		var $this = $('.tab-item[data-slug="' + slug + '"]');
		$('.nav-link.nav-tab-link').removeClass('active');

		if (!isInitialLoad && activeTab.data('slug') === $this.data('slug'))
			return;

		if ($.browser.mobile)
			$('.nav-tab-link[data-slug="' + slug + '"]').addClass('active');

		if (!isFromPopstate)
			window.history.pushState({ slug: slug }, slug, './#' + slug);

		$('.tabs .tab-item').removeClass('active');
		$this.addClass('active');

		activeTab.fadeOut(250, function() {
			$('.tab__content .tab-content').removeClass('active');
			activeTab = $('.tab__content .tab-content[data-slug="' + slug + '"]');
			var tabForm = activeTab.find('form');

			if (!!tabForm.length && JSON.parse(tabForm.data('requestformtoken') || 'false') && !tabForm.find('.form-auth-token').val())
				getFormAuthToken(tabForm);

			activeTab.addClass('active');
			activeTabHeight = activeTab.outerHeight();

			tabWrapper.stop().animate({
				height: activeTabHeight
			}, 500, function() {
				activeTab.fadeIn(250);
			});
		});
	}

	$('.tabs .tab-item').on('click', function(){
		handleTabChange($(this).data('slug'));
	});
	$('.nav-tab-link').on('click', function(){
		handleTabChange($(this).data('slug'));
		$('.navbar-toggler').click();
	});
	$(window).on('popstate', function(){
		handleTabChange(window.history.state.slug || 'home', true);
	});
});
