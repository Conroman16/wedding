(function(){
	var head = document.head || document.getElementsByTagName('head')[0];

	window.lazyloader = {
		init: function(){
			var llImgs = $('.bg-lazyload');
			$.each(llImgs, function(indx){
				var $img = $(llImgs[indx]),
					fsUrl = $img.data('url');

				if (!fsUrl)
					return;

				var styleEl = document.createElement('style'),
					img = new Image(),
					cssText = window.templates.llImgTransition({ imgUrl: fsUrl });

				if (styleEl.styleSheet)
					styleEl.styleSheet.cssText = cssText;
				else
					styleEl.appendChild(document.createTextNode(cssText));
				head.appendChild(styleEl);

				img.onload = function(){
					$img.css('background-image', 'url(' + fsUrl + ')');
					$img.addClass('ll-loaded');
				};
				img.src = fsUrl;
			});
		}
	};
})();
