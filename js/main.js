$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("header").addClass("show");
    } else {
        $("header").removeClass("show");
    }
});