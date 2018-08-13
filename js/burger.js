'use strict';

//Попап навигационное меню

var navPopup = document.querySelector(".nav-popup");
var navButtonClose = document.querySelector(".nav-popup__btn");
var navLink = document.querySelector(".header__nav--hamburger");
var navItemLink = document.querySelectorAll(".nav-popup--link");

var op = 0.1;

navLink.addEventListener("click", function(evt){
    evt.preventDefault();
    navPopup.style.opacity = 0;
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
        if (op >= 0) {
            op -= 0.1;
            navPopup.style.opacity = op;
            setTimeout(fooClose, 100);
        }else {
            navPopup.classList.remove("nav-popup--open");
        }
        }, 100);
});
document.addEventListener("keydown", function(evt){
    if(evt.keyCode === 27){
        if (navPopup.classList.contains("nav-popup--open")) {
            
            setTimeout(function fooClose(){
                if (op >= 0) {
                    op -= 0.1;
                    navPopup.style.opacity = op;
                    setTimeout(fooClose, 100);
                }else {
                    navPopup.classList.remove("nav-popup--open");
                }
                }, 100);
        }   
    }
});

for (var i = 0; i < navItemLink.length; i++){
    navItemLink[i].addEventListener("click", function(evt){
        
        setTimeout(function fooClose(){
            if (op >= 0) {
                op -= 0.1;
                navPopup.style.opacity = op;
                setTimeout(fooClose, 100);
            }else {
                navPopup.classList.remove("nav-popup--open");
            }
            }, 100);
    });
    
}


//Аккордеон Команда

/*
var openCloseBtn = document.querySelectorAll(".team__member");
var teamMemberAkk = document.querySelectorAll(".team__block");

for (var b = 0; b < openCloseBtn.length; b++){
    openCloseBtn[b].addEventListener("click", function(evt){
        evt.preventDefault();
        teamMemberAkk.classList.add("team__block--open");
        teamMemberAkk.classList.remove("team__block--close");
    });
}
*/

var openCloseBtn = document.querySelectorAll('.team__member');

var a;
for (a = 0; a < openCloseBtn.length; a++) {
    openCloseBtn[a].addEventListener('click', function() {
        if(!(this).classList.contains('team__member--active')) {
            for(a = 0; a < openCloseBtn.length; a++) {
                openCloseBtn[a].classList.remove('team__member--active');
            }
            this.classList.add('team__member--active');
            this.classList.add('team__member--yellow');
        } else if (this.classList.contains('team__member--active')) {
            this.classList.remove('team__member--active');
            this.classList.remove('team__member--yellow');
        }
    })
}


//Аккордеон Меню
var sectionMenu = document.querySelector(".menu");
var menuOpenClose = document.querySelectorAll(".menu__item");
var menuTextBtnColor = document.querySelectorAll(".menu__item--title");

sectionMenu.addEventListener('click', function(e) {
    for (let m = 0; m < menuOpenClose.length; m++) {
        menuOpenClose[m].classList.remove('menu__item--active');
        for (let y = 0; y < menuTextBtnColor.length; y++){
            menuTextBtnColor[y].classList.remove('menu__item--yellow');
        }
    }
  })
  for (let m = 0; m < menuOpenClose.length; m++) {
    menuOpenClose[m].addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      if (menuOpenClose[m].classList.contains('menu__item--active')) {
        menuOpenClose[m].classList.remove('menu__item--active');

        for (let y = 0; y < menuTextBtnColor.length; y++){
            menuTextBtnColor[y].classList.remove('menu__item--yellow');
        }
      } else {
        for (let m = 0; m < menuOpenClose.length; m++) {
            menuOpenClose[m].classList.remove('menu__item--active'); 
            for (let y = 0; y < menuTextBtnColor.length; y++){
                menuTextBtnColor[y].classList.remove('menu__item--yellow');
            }
          }
          for (let y = 0; y < menuTextBtnColor.length; y++){
            menuTextBtnColor[y].classList.add('menu__item--yellow');
        }
        menuOpenClose[m].classList.add('menu__item--active');
        
    }
  })
}

// Слайдер
  
