const navLinks = document.querySelectorAll(".nav-link");

const setActiveClass = (evt) => {
  navLinks.forEach((elem) => elem.classList.remove("active"));
  evt.target.classList.add('active')
}

navLinks.forEach((n) => n.addEventListener("click", setActiveClass))
