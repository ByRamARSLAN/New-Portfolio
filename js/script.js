var menuBar = document.querySelector('#menu-bar');
var navLinks = document.querySelector('.nav-links');

navLinks.style.top = '-450px'

menuBar.onclick = function(){
    if(navLinks.style.top == '-450px'){
        newLinks.style.top = '200px'
    } else {
        navLinks.style.top = '-450px'
    }
}