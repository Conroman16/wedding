$(function(){
	window.countdown = {

		getTimeRemaining: function(){
			var t = new Date(config.weddingDate) - new Date();
			var seconds = Math.floor((t / 1000) % 60);
			var minutes = Math.floor((t / 1000 / 60) % 60);
			var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
			var days = Math.floor(t / (1000 * 60 * 60 * 24));
			return {
				total: t,
				days: days,
				hours: hours,
				minutes: minutes,
				seconds: seconds
			};
		},

		getCountdownString: function(){
			var r = this.getTimeRemaining();
			return r.days + ' days ' + r.hours + ' hours ' + r.minutes + ' minutes ' + r.seconds + ' seconds';
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
