$(function(){
	var slug = window.location.hash.replace('#', '');
	var $el = $('.active-default');
	var tabWrapper = $('.tab__content');

	if (slug){
		$el = $('[data-slug="' + slug + '"]');
		$el.addClass('active');
	}
	else
		$el.toggleClass('active-default active');

	var activeTab = tabWrapper.find('.active');
	var activeTabHeight = activeTab.outerHeight();

	activeTab.show();
	tabWrapper.height(activeTabHeight);

	function handleTabChange(self) {
		var $this = $(self);

		if (activeTab.data('slug') === $this.data('slug'))
			return;

		window.location.hash = slug = $this.data('slug');
		$('.tabs .tab-item').removeClass('active');
		$this.addClass('active');

		activeTab.fadeOut(250, function() {
			$('.tab__content .tab-content').removeClass('active');
			activeTab = $('.tab__content .tab-content[data-slug="' + $this.data('slug') + '"]');
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
		handleTabChange(this);
	});
	$('.nav-tab-link').on('click', function(){
		handleTabChange(this);
		$('.navbar-toggler').click();
	});
});
