const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hero = document.querySelector(".hero");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    hero.classList.toggle("hero-active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hero.classList.remove("hero-active");
}