var hamburgerToggle = $('.hb-toggle');
var topNav = $('.top-nav');
var siteWrapper = $('.site-wrapper')

var hamburgerToggleClick = function (e) {
	var isActive = topNav.attr('data-state');
	e.preventDefault ();

	if (isActive == 'expand') {
		topNav.attr('data-state','collapse');
		siteWrapper.removeClass('no-scroll');
	} else {
		topNav.attr('data-state','expand');
		siteWrapper.addClass('no-scroll');
	}
};

hamburgerToggle.on('click', hamburgerToggleClick);

$( ".hb-toggle" ).on( "click", function() {
  $( this ).toggleClass( "expand" );
});
