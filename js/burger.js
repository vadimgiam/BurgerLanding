var navPopup = document.querySelector(".nav-popup");
var navButtonClose = document.querySelector(".nav-popup__btn");
var navLink = document.querySelector(".header__nav--hamburger");
var navItemLink = document.querySelectorAll(".nav-popup--link");

var op = 0.1;

navLink.addEventListener("click", function(evt){
    evt.preventDefault();
    navPopup.classList.add("nav-popup--open");
setTimeout(function foo(){
if (op < 1) {
    op += 0.1;
    navPopup.style.opacity = op;
    setTimeout(foo, 100);
}
}, 100);
});

navButtonClose.addEventListener("click", function(evt){
    evt.preventDefault();
    
    setTimeout(function fooClose(){
        if (op >= 1) {
            op -= 0.1;
            navPopup.style.opacity = 0;
            setTimeout(fooClose, 100);
        }else {
            navPopup.classList.remove("nav-popup--open");
        }
        }, 100);
});
document.addEventListener("keydown", function(evt){
    if(evt.keyCode === 27){
        if (navPopup.classList.contains("nav-popup--open")) {
            navPopup.classList.remove("nav-popup--open");
            setTimeout(function foo(){
                if (op >= 1) {
                    op -= 0.1;
                    navPopup.style.opacity = op;
                    setTimeout(foo, 100);
                }
                }, 100);
        }   
    }
});

for (var i = 0; i < navItemLink.length; i++){
    navItemLink[i].addEventListener("click", function(evt){
        navPopup.classList.remove("nav-popup--open");
        setTimeout(function foo(){
            if (op >= 1) {
                op -= 0.1;
                navPopup.style.opacity = op;
                setTimeout(foo, 100);
            }
            }, 100);
    });
    
}
