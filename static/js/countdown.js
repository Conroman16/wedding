$(function(){
	window.countdown = {

		getTimeRemaining: function(){
			var t = new Date(config.weddingDate) - new Date();
			var seconds = Math.floor((t / 1000) % 60);
			var minutes = Math.floor((t / 1000 / 60) % 60);
			var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
			var days = Math.floor(t / (1000 * 60 * 60 * 24));
			return {
				days: days,
				hours: hours,
				minutes: minutes,
				seconds: seconds
			};
		},

		getCountdownString: function(){
			var remaining = this.getTimeRemaining();
			var retStr = '';
			var keys = Object.keys(remaining);
			var add = function(num, label){
				if (num === 1)
					label = label.substring(0, label.length - 1);
				return retStr += ' ' + num + ' ' + label;
			};

			for (var i = 0; i < keys.length; i++){
				var key = keys[i];
				add(remaining[key], key);
			}

			return retStr;
		},

		bind: function(el){
			var self = this,
				$el = $(el);
			setInterval(function(){
				$el.text(self.getCountdownString());
				$el.removeClass('invisible');
			}, 1000);
		}
	};
});
