const nav = document.querySelector('#navbar');
const main = document.querySelector('main');
const toggleIcon = document.querySelector('#navbar-toggle-icon');
const upBtn = document.querySelector('.upBtn');
const body = document.body;
const footer = document.querySelector('footer');

// MOBILE NAVBAR ICON TOGGLE
toggleIcon.addEventListener('click', function () {
    nav.classList.toggle('slide');
    toggleIcon.classList.toggle('fa-xmark');
});

main.addEventListener('click', function () {
    nav.classList.remove('slide');
    toggleIcon.classList.remove('fa-xmark');
});

footer.addEventListener('click', function () {
    nav.classList.remove('slide');
    toggleIcon.classList.remove('fa-xmark');
});

// IMAGE CAROUSEL
const slides = document.getElementsByClassName('slides');
let slideIndex = 1;
let i;

//IMAGE CAROUSEL
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

//  ARTICLE BUTTON
function Article(link) {
    window.location.href = link;
}

//  BACK TO TOP BUTTON
function backToTop() {
    window.scrollTo({
        top: 0,
    });
}