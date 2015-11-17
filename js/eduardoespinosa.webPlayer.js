/**
 * Created by eduardo on 9/11/15.
 */
(function ($) {
	if (!$.eduardoespinosa) {$.eduardoespinosa = new Object();}
	$.eduardoespinosa.webPlayer = function (el, getData, options) {
		// To avoid scope issues, use 'base' instead of 'this'
		// to reference this class from internal events and functions.
		var base = this;
		// Access to jQuery and DOM versions of element
		base.$el = $(el);
		base.el = el;
		// Add a reverse reference to the DOM object
		base.$el.data("eduardoespinosa.webPlayer", base);
		base.init = function () {
			base.getData = getData;
			base.options = $.extend({}, $.eduardoespinosa.webPlayer.defaultOptions, options);
			// Put your initialization code here
			base.render();
		};

		// Sample Function, Uncomment to use
		base.render = function () {
			console.log(base.options);
			base.$el.html(base.options.damm);
		};

		// Run initializer
		base.init();
	};

	$.eduardoespinosa.webPlayer.defaultOptions = {option1: "defData"};
	$.fn.eduardoespinosa_webPlayer = function (getData, options) {
		return this.each(function () {(new $.eduardoespinosa.webPlayer(this, getData, options));});
	};
	// This function breaks the chain, but returns
	// the myCorp.myExample if it has been attached to the object.
	$.fn.getEduardoespinosa_webPlayer = function () {
		this.data("eduardoespinosa.webPlayer");
	};

})(jQuery);




/*

/!*
function isPositive(num) {return num >= 0;}
f1 = function isPositive(num) {return num >= 0;}
typeof f1 =>"function"*!/

function countForArray(array, condition) {
	var result = 0;
	for (var i = 0; i < array.length; i++) {
		var element = array[i];
		if (condition(element)) {
			result++;
		}
	}
	return result;
}


countForArray(a, function(num) {return num < 0;});


a1 = [-2,1-3,5,6]

	a.filter(function(num) {return num%2==0;}).map(function(num) {return Math.abs(num);});


[2, 2, 6]*/
