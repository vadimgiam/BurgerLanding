var navPopup = document.querySelector(".nav-popup");
var navButtonClose = document.querySelector(".nav-popup__btn");
var navLink = document.querySelector(".header__nav--hamburger");

navLink.addEventListener("click", function(evt){
    evt.preventDefault();
    navPopup.classList.add("nav-popup--open");
});

navButtonClose.addEventListener("click", function(evt){
    evt.preventDefault();
    navPopup.classList.remove("nav-popup--open");
    
});
document.addEventListener("keydown", function(evt){
    if(evt.keyCode === 27){
        if (navPopup.classList.contains("nav-popup--open")) {
            navPopup.classList.remove("nav-popup--open");
            
        }   
    }
});

