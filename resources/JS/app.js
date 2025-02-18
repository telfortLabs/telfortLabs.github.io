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