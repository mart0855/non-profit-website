var hamburgerToggle = $('.hb-toggle');
var topNav = $('.top-nav');

var hamburgerToggleClick = function (e) {
	var isActive = topNav.attr('data-state');
	e.preventDefault ();

	if (isActive == 'expand') {
		topNav.attr('data-state','collapse');
	} else {
		topNav.attr('data-state','expand');
	}
};

hamburgerToggle.on('click', hamburgerToggleClick);

$( ".hb-toggle" ).on( "click", function() {
  $( this ).toggleClass( "expand" );
});
