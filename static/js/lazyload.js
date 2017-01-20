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
					cssText = window.templates.llImgTransition({ imgUrl: fsUrl }),
					blur = $img.data('blur');

				if (styleEl.styleSheet)
					styleEl.styleSheet.cssText = cssText;
				else
					styleEl.appendChild(document.createTextNode(cssText));
				head.appendChild(styleEl);

				img.onload = function(){
					var u = fsUrl;
					// if (blur){
					// 	var canvas = document.getElementById('sb-worker');
					// 	StackBlur.image(img, canvas, '20px');
                    //
					// 	setTimeout(function(){
					// 		u = canvas.toDataURL();
					// 		$img.css('background-image', 'url(' + u + ')');
					// 	}, 10000);
					// }
					// else
						$img.css('background-image', 'url(' + u + ')');
					$img.addClass('ll-loaded');
				};
				img.src = fsUrl;
			});
		}
	};
})();
