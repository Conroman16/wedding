<script id="lazyload-img-transition-template" data-name="llImgTransition" type="text/x-swig-template">
	@supports (background-image: filter(url('i.jpg'), blur(1px))) {
		@keyframes sharpen {
			from {
				background-image: -webkit-filter(url('<{ imgUrl }>'), blur(20px));
				background-image: filter(url('<{ imgUrl }>'), blur(20px));
			}
			to {
				background-image: -webkit-filter(url('<{ imgUrl }>'), blur(0px));
				background-image: filter(url('<{ imgUrl }>'), blur(0px));
			}
		}
	}
</script>

<script id="loader-template" data-name="loader" type="text/x-swig-template">
{% include '../partials/loader.swig' %}
</script>
