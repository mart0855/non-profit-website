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
var logIn = $('.log-in');
var passWrd = $('.password');
var lrWrppr = $('.log-reg-wrapper');
var exitLr = $('.exit-lr');
var lrLogIn = $('.lr-log-in');
var regTggle = $('.register-toggle');
var regWrppr = $('.register-wrapper');
var regExit = $('.register-exit');
logIn.click(function(e) {
	e.preventDefault();
	var isActive = lrWrppr.attr('data-state');
	if (isActive == 'expand') {
		lrWrppr.attr('data-state', 'collapse');
		topNav.attr('data-state','expand');
		siteWrapper.removeClass('no-scroll');
	} else {
		lrWrppr.attr('data-state', 'expand');
		topNav.attr('data-state','collapse');
		siteWrapper.addClass('no-scroll');
	}
});
lrLogIn.click(function(e){
	e.preventDefault();
	var isActive = lrWrppr.attr('data-state');
	if (isActive == 'expand') {
		lrWrppr.attr('data-state', 'collapse');
		topNav.attr('data-state','expand');
		siteWrapper.removeClass('no-scroll');
	} else {
		lrWrppr.attr('data-state', 'expand');
		topNav.attr('data-state','collapse');
		siteWrapper.addClass('no-scroll');
	}
});
regTggle.click(function(e){
	e.preventDefault();
	var isActive = regWrppr.attr('data-state');
		if (isActive == 'expand') {
			regWrppr.attr('data-state', 'collapse');
			siteWrapper.removeClass('no-scroll');
	} else {
			regWrppr.attr('data-state', 'expand');
			topNav.attr('data-state','collapse');
			siteWrapper.addClass('no-scroll');
	}
	lrWrppr.attr('data-state', 'collapse');
	hamburgerToggle.removeClass('expand');
});
regExit.click(function(e){
	e.preventDefault();
	regWrppr.attr('data-state', 'collapse');
	hamburgerToggle.removeClass('expand');
});
exitLr.click(function(e){
	e.preventDefault();
	lrWrppr.attr('data-state', 'collapse');
	hamburgerToggle.removeClass('expand');
});
$(document).keyup(function(e) {
    if (e.keyCode == 27) { // esc keycode
    regWrppr.attr('data-state', 'collapse');
    lrWrppr.attr('data-state', 'collapse');
		topNav.attr('data-state','collapse');
		siteWrapper.removeClass('no-scroll');
		hamburgerToggle.removeClass('expand');
		}
});
