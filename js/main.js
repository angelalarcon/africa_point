$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll >= 500) {
		$("header").addClass("show");
	} else {
		$("header").removeClass("show");
	}
});


$(window).on('scroll', function() {
	if ($(window).scrollTop() > $('#wheretogo').height()) {
		$('.black').addClass('fixed');
	}
	else {
		$('.black').removeClass('fixed');
	}
});

var offset = 39;

$('.black a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});