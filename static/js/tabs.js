$(function(){
	var slug = window.location.hash.replace('#', '');
	var $el = $('.active-default');
	var tabWrapper = $('.tab__content');

	if (slug){
		$el = $('.tab-item[data-slug="' + slug + '"]');
		$el.addClass('active');
	}
	else
		$el.toggleClass('active-default active');

	var activeTab = tabWrapper.find('.active');
	var activeTabHeight = activeTab.outerHeight();

	activeTab.show();
	tabWrapper.height(activeTabHeight);

	$('.tabs > .tab-item').on('click', function() {
		$('.tabs .tab-item').removeClass('active');
		var $this = $(this);
		$this.addClass('active');
		window.location.hash = $this.data('slug');

		activeTab.fadeOut(250, function() {
			$('.tab__content .tab-item').removeClass('active');
			activeTab = $('.tab__content .tab-item[data-slug="' + $this.data('slug') + '"]');
			activeTab.addClass('active');
			activeTabHeight = activeTab.outerHeight();

			// Animate height of wrapper to new tab height
			tabWrapper.stop().delay(50).animate({
				height: activeTabHeight
			}, 500, function() {
				activeTab.delay(50).fadeIn(250);
			});
		});
	});
});
