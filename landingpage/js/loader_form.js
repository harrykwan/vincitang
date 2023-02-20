
var loader = document.getElementById("loader_form");
    
var dismissLoadingScreen = function() {
    loader.style.display = "none";
};
    
var wait3seconds = function() {
    // REFERENCE:  https://www.w3schools.com/jsref/met_win_settimeout.asp
    var result = setTimeout(dismissLoadingScreen, 3000);
};

window.addEventListener("load", wait3seconds);
