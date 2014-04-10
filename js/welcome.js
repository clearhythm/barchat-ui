// welcome.js - custom js for the welcome page
document.querySelector('#mySlider').addEventListener('slide', function(e){ updatePaginator(e.detail.slideNumber); });
var updatePaginator = function(new_slide){
	var $selected = $('.paginator .selected');
	var selected_slide = $selected.data('slide');
	if (new_slide != selected_slide) {
		$selected.removeClass('selected');
		$('#slide_'+new_slide).addClass('selected');
	}
}

window.addEventListener('push', function(){ console.log('foo'); });

// TODO: Get rid of thsi hack, just here to make for testing
$('button').click(function(){
  window.location.href="/wall.html";
});
$('button').touchend(function(){
  window.location.href="/wall.html";
});