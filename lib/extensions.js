// Extend string prototype
Object.defineProperties(String.prototype, {
	'toTitle': {
		value(){
			return this.replace(/\w\S*/g, (str) => `${str.charAt(0).toUpperCase()}${str.substring(1).toLowerCase()}`);
		}
	},
	'capitalize': {
		value(){
			return this.replace(/\w\S*/g, (str) => `${str.charAt(0).toUpperCase()}${str.substring(1)}`);
		}
	}
});

// Extend object prototype
Object.defineProperties(Object.prototype, {
	'toFormattedJson': {
		value(){
			return JSON.stringify(this, null, 4);
		}
	}
});
