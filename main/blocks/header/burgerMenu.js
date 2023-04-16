const hamburger = document.querySelector(".hamburger");
const navMenu  = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

const toggleActiveClass = () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const removeActiveLinkClass = () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

const setActiveLinkClass = (evt) => {
  navLinks.forEach((elem) => elem.classList.remove('nav-link__active'));
  evt.target.classList.add('nav-link__active');
}

hamburger.addEventListener("click", toggleActiveClass);
navLinks.forEach((link) => link.addEventListener("click", removeActiveLinkClass));
navLinks.forEach((link) => link.addEventListener("click", setActiveLinkClass));
