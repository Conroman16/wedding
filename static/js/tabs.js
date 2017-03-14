$(function(){
	var slug = window.location.hash.replace('#', '') || 'home';
	var tabLabel = $('.active-default');
	var tabWrapper = $('.tab__content');

	if (slug){
		tabLabel = $('[data-slug="' + slug + '"]');
		tabLabel.addClass('active');
	}
	else {
		tabLabel.removeClass('active-default');
		tabLabel.addClass('active');
	}

	var activeTab = tabWrapper.find('.active');
	var activeTabHeight = activeTab.outerHeight();

	activeTab.show();
	tabWrapper.height(activeTabHeight);
	window.history.pushState({ slug: slug }, slug, './#' + slug);

	function handleTabChange(newSlug, isFromPopstate) {
		var $this = $('.tab-item[data-slug="' + newSlug + '"]');
		slug = newSlug;
		$('.nav-link.nav-tab-link').removeClass('active');

		if (activeTab.data('slug') === $this.data('slug'))
			return;

		if (!isFromPopstate)
			window.history.pushState({ slug: slug }, slug, './#' + slug);

		$('.tabs .tab-item').removeClass('active');

		$this.addClass('active');

		activeTab.fadeOut(250, function() {
			$('.tab__content .tab-content').removeClass('active');
			activeTab = $('.tab__content .tab-content[data-slug="' + slug + '"]');
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
