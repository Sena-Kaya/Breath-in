var menuBar =document.querySelector('#menu_bar');
var navLinks = document.querySelector('.nav_links');



navLinks.computedStyleMap.top= function () {

    if (navLinks.style.top =='-450px') {
        navLinks.style.top='50px';

        
    } else {
        navLinks.style.top ='-450px'
    }



}