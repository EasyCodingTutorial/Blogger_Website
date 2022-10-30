// Search Form
let SearchIcon = document.querySelector("#SearchIcon");
let SearchForm = document.querySelector(".SearchForm");

SearchIcon.onclick = () => {
  SearchIcon.classList.toggle("fa-times");
  SearchForm.classList.toggle("active");
  Menu.classList.remove("fa-times");
  Navbar.classList.remove("active");
};

// for Navbar/Header
let Menu = document.querySelector("#MenuBars");
let Navbar = document.querySelector(".navbar");

Menu.onclick = () => {
  Menu.classList.toggle("fa-times");
  Navbar.classList.toggle("active");
  SearchIcon.classList.remove("fa-times");
  SearchForm.classList.remove("active");
};

// Theme Toggle
let ThemeToggle = document.querySelector(".themeToggle");
let Togglebtn = document.querySelector(".ToggleBtn");

Togglebtn.onclick = () => {
  ThemeToggle.classList.toggle("active");
  SearchIcon.classList.remove("fa-times");
  SearchForm.classList.remove("active");
  Menu.classList.remove("fa-times");
  Navbar.classList.remove("active");
};

document.querySelectorAll(".themeToggle .themeBtn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--main", color);
  };
});
