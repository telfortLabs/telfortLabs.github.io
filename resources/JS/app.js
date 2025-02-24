// Nav icon selections
const navIcon = document.getElementById('menu-icon');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');

// Scroll to top selection
const scrollUp = document.getElementById('up-arrow');

// Select nav links
const navLink = document.querySelectorAll('.navLink');

navIcon.addEventListener('click', () => {
    ul.classList.toggle('show');
})

navLink.forEach((link) => {
    link.addEventListener('click', () => {
        ul.classList.remove("show");
    })
});

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
});


// variables for slideshow items
const slides = document.getElementsByClassName("slideshow");
const slides2 = document.getElementsByClassName("slideshow2");

// variable to control slide index
let slideIndex = 1;

// calling the functions to show the slides
showSlides(slideIndex);
showSlides2(slideIndex);

/**
 * This function takes one parameter
 * @param n which is the slide index
 * then control the buttons previous
 * and next button.
 */

function plusSlides(n) {
    showSlides(slideIndex += n);
}

/**
 * This function takes one parameter
 * @param n which is the slide index
 * then control the buttons previous
 * and next button.
 */

function plusSlides2(n) {
    showSlides2(slideIndex += n);
}

/**
 * This function takes one parameter
 * @param n which is the slide index
 * then display the next slide when
 * the user click the next button
 * and show the previous slide
 * when the user click the
 * previous arrow.
 */

function showSlides(n) {
    let i;

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}

/**
 * This function takes one parameter
 * @param n which is the slide index
 * then display the next slide when
 * the user click the next button
 * and show the previous slide
 * when the user click the
 * previous arrow.
 */

function showSlides2(n) {
    let i;

    if (n > slides2.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides2.length;
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }

    slides2[slideIndex-1].style.display = "block";
}
