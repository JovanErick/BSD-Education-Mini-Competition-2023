const nav = document.querySelector('#navbar');
const fixedNav = nav.offsetTop;
const toggleIcon = document.querySelector('#navbar-toggle-icon');
const upBtn = document.querySelector('.upBtn');

// MOBILE NAVBAR ICON TOGGLE
toggleIcon.addEventListener('click', function () {
    nav.classList.toggle('slide');
    toggleIcon.classList.toggle('fa-xmark');
});

//  MOBILE NAVBAR SCROLLED
window.onscroll = function () {
    if (window.pageYOffset > fixedNav) {
        nav.style.display = 'none';
    }

    else {
        nav.style.display = 'flex';
    }
}

//IMAGE CAROUSEL
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

//  ARTICLE BUTTON
function Article(link) {
    window.location.href= link;
}

//  BACK TO TOP BUTTON
function backToTop() {
    window.scrollTo({
        top: 0,
    });
}