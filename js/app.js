// app.js - application wide javascript

// mmenu configuration
//	The menu on the left
$(function() {
	$('nav#menu-left').mmenu({
		position	: 'left',
		classes		: 'mm-dark',
		dragOpen	: true
	});
});

//	The menu on the right
$(function() {
	$('nav#menu-right').mmenu({
		position	: 'right',
		classes		: 'mm-dark',
		dragOpen	: true
	});
});
