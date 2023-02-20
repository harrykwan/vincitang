setTimeout(function(){        
    $('#preloader').fadeOut();
    $('[data-loader="circle-side"]').delay(150).fadeOut('slow'); 
}, 40000);

var loader = document.getElementById("preloader");
    
var dismissLoadingScreen = function() {
    loader.style.display = "none";
};
    
var wait3seconds = function() {
    // REFERENCE:  https://www.w3schools.com/jsref/met_win_settimeout.asp
    var result = setTimeout(dismissLoadingScreen, 3000);
};

window.addEventListener("load", wait3seconds);
