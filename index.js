const nav = document.querySelector("header");
const age = document.querySelector(".age");
const footer = document.getElementById("copyrightText");
const menu = document.querySelector(".toggle");
const ul = document.querySelector(".menu-nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 0);
});

const getAge = (birthDate) =>
  Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

age.innerText = getAge("1988-11-21");

footer.innerHTML = `<p> © ${new Date().getFullYear()} All rights reserved by Angel Tomashevski</p>
`;

const toggleMenu = () => {
  menu.classList.toggle("active");
  ul.classList.toggle("active");
};
