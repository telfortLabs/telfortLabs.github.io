/* telfortLabs - The app view controller
* Copyright (C) 2024-2025 Pierre Telfort
*
* app.js
*
* This library is free software: you can redistribute it and/or
* modify it under the terms of the GNU Lesser General Public
* License as published by the Free Software Foundation; either
* version 3 of the License, or (at your option) any later version.
*
* This library is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
* Library General Public License for more details.
*
* You should have received a copy of the GNU Lesser General Public
* License along with this library.  If not, see
* <https://www.gnu.org/licenses/>.
*/

// Nav icon selections
const navIcon = document.getElementById('menu-icon');                       /* Variable for menu icon. */
const ul = document.querySelector('nav ul');                                     /* Variable for navbar content. */
const nav = document.querySelector('nav');                                  /* Variable for nav bar. */

// Scroll to top selection
const scrollUp = document.getElementById('up-arrow');                      /* Variable for up arrow icon. */

// Select nav links
const navLink = document.querySelectorAll('.navLink');                /* Variable to select navbar content. */

navIcon.addEventListener('click', () => {                                      /* Event listener to display menu icon. */
    ul.classList.toggle('show');
})

/**
 * The event listener below will hide
 * the menu list once the user click on
 * an item.
 */

navLink.forEach((link) => {
    link.addEventListener('click', () => {
        ul.classList.remove("show");
    })
});

/**
 * The event listener below will
 * scroll back to the top when
 * the user click on up arrow
 * on the bottom right of the screen.
 */

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
});

// Script below is for automatic slideshow
const slides = document.getElementsByClassName("slideshow");            /* Variable for slide data. */
const slides2 = document.getElementsByClassName("slideshow2");          /* Variable for slide data. */
let slideIndex = 0;                                                                                /* Variable for first slide index. */
let slideIndex1 = 0;                                                                               /* Variable for second slide index. */
showSlides();                                                                                              /* Calling first slideshow. */
showSlides2();                                                                                             /* Calling second slideshow. */

/**
 * Function below will display the
 * current slide then check the slide index
 * increment the slide index to display
 * the next slide and so forth. It will
 * display the next slide every 3 seconds then
 * start over when it reaches the end of the slide.
 */

function showSlides() {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

/**
 * Function below will display the
 * current slide then check the slide index
 * increment the slide index to display
 * the next slide and so forth. It will
 * display the next slide every 4 seconds then
 * start over when it reaches the end of the slide.
 */

function showSlides2() {
    let i;
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides2.length) {
        slideIndex1 = 1
    }
    slides2[slideIndex1-1].style.display = "block";
    setTimeout(showSlides2, 4000); // Change image every 4 seconds
}