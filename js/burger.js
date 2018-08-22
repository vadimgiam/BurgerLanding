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
            for(var b = 0; b < openCloseBtn.length; b++) {
                openCloseBtn[b].classList.remove('team__member--yellow');
                openCloseBtn[b].classList.remove('team__member--active');
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

// Форма

var myForm = document.querySelector(".form");
var sendButton = document.querySelector(".form__submit");
var closeOrderPopup = document.querySelector(".order__cont--btn");
var orderPopup = document.querySelector(".order__popup");

sendButton.addEventListener("click", function(event){
event.preventDefault();
if(validateForm(myForm)){
    
const data = {
   name: myForm.elements.name.value,
   phone:myForm.elements.phone.value,
   comment: myForm.elements.comment.value
};

const xhr = new XMLHttpRequest();
xhr.responseType = "join";
xhr.open("POST","https://webdev-api.loftschool.com/sendmail");
xhr.send(JSON.stringify(data));
xhr.addEventListener("load", function(){
if(xhr.response.status <= 400){
    sendButton.addEventListener("click", function(evt){
        evt.preventDefault();
        orderPopup.classList.add("order__popup--open");
    });

    closeOrderPopup.addEventListener("click", function(evt){
        evt.preventDefault();
        orderPopup.classList.remove("order__popup--open");
            
    });
    document.addEventListener("keydown", function(evt){
        if(evt.keyCode === 27){
            if (orderPopup.classList.contains("order__popup--open")) {
         
                orderPopup.classList.remove("order__popup--open");
                 
            }   
        }
    });
}
});
}

});

function validateForm(form) {
    let valid = true;

    if(!validateField(form.elements.name)){
        valid = false;
    }
    if(!validateField(form.elements.phone)){
        valid = false;
    }
    if(!validateField(form.elements.comment)){
        valid = false;
    }
    return valid;
}
function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
 }
/*function validateField(field){
    if(!field.checkValidity()){
        field.form.nextElementSibling.textContent = field.validationMessage;
        return false;
    } else{
        field.form.nextElementSibling.textContent = "";
        return true;
    }
}*/


//Popup отзывы

/*var reviewBtnOpen = document.querySelectorAll(".reviews__hover--btn");
var successOverlay = document.querySelector(".reviews__popup");
var reviewsBtnClose = document.querySelector(".cont__btn");


for(let r = 0; r < reviewBtnOpen.length; r++){
    reviewBtnOpen[r].addEventListener("click", function(e){
    
        e.preventDefault();
        successOverlay.classList.add("reviews__popup--open");
    
    });
}


    reviewsBtnClose.addEventListener("click", function(e){
        e.preventDefault();
        successOverlay.classList.remove("reviews__popup--open");
          
    });


document.addEventListener("keydown", function(e){
    if(e.keyCode === 27){
        if (successOverlay.classList.contains("reviews__popup--open")) {
            
            
            successOverlay.classList.remove("reviews__popup--open");
                
        }   
    }
});
*/

function commentsPopup () {
    var reviewBtnOpen = document.querySelectorAll(".reviews__hover--btn");
    var successOverlay = document.querySelector(".reviews__popup");
    var reviewsBtnClose = document.querySelector(".cont__btn");

    var reviewPopupName = document.querySelector(".cont__title");
    var reviewPopupComment = document.querySelector(".cont__text");

for (let r=0; r < reviewBtnOpen.length; r++){
    reviewBtnOpen[r].addEventListener("click", function(e){
        e.preventDefault();
        var z = this;
        
        var thisParent = z.parentNode;

const name = thisParent.querySelector(".reviews__hover--title");
const comment =thisParent.querySelector(".reviews__hover--text");

reviewPopupName.textContent = name.innerHTML;
reviewPopupComment.textContent = comment.innerHTML;
        successOverlay.style.display = "block";
    });
}
reviewsBtnClose.addEventListener("click", function(e){
    e.preventDefault();
    successOverlay.style.display = "none";
});
document.addEventListener("keydown", function(e){
    if(e.keyCode === 27){
        if (successOverlay.style.display = "block") {
            successOverlay.style.display = "none";  
        }   
    }
});



}

commentsPopup ();


//слайдер

const left = document.querySelector(".slider__link--left");
const right = document.querySelector(".slider__link--right");
const items = document.querySelector(".slider__list");
const computed = getComputedStyle(items);

right.addEventListener("click", function(event) {
    event.preventDefault();
    let currentRight = parseInt(computed.right);
  
    if (!currentRight) {
      currentRight = 0;
    }
    
    if (currentRight < 200) {
      items.style.right = currentRight + 100 + "%";
    }else{
        items.style.right = 0;
    }
  });

  left.addEventListener("click", function(event) {
    event.preventDefault();
    let currentRight = parseInt(computed.right);
  
    if (!currentRight) {
      currentRight = 0;
    }
  
    if (currentRight > 0) {
      items.style.right = currentRight - 100 + "%";
    }
  });