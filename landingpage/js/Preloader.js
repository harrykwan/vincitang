function load_func() {
    $('.preloader').delay(350).fadeOut('slow');
}

var pageLoaded = false;
var timeoutElapsed = false;

$(window).on('load', function() {
    pageLoaded = true;
    if (timeoutElapsed) {
        load_func();
    }
});

setTimeout(function() {
    timeoutElapsed = true;
    if (pageLoaded) {
        load_func();
    }
}, 3500);
