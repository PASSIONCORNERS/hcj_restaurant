// -------------Nav Hamburger--------------
let navSlide = ()=> {
    let burger = document.querySelector('.main_nav-burger');
    let nav = document.querySelector('.main_nav');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('burger-active');
    })
}

navSlide();

// -------------Nav Hide On Scroll and Change background--------------

// 1. Javascript hide on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function abc() {
var currentScrollPos = window.pageYOffset;
var navbar = document.querySelector('#navbar');
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    
  } else {
    document.getElementById("navbar").style.top = "-150px";
    navbar.classList.add('bg-active');

  } 

  prevScrollpos = currentScrollPos;
}

// --



// 2. Jquery change background

$(document).ready(function(){
	$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("#navbar").addClass("bg-active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("#navbar").removeClass("bg-active");
        }
    });
});
});

