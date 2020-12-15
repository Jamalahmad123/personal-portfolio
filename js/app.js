'use strict';

// Nav UI element
const navHeader = document.querySelector('.nav-header');
const sidebarList = document.querySelector('.sidebar');
const hambugerMenu = document.querySelector('.hamburger');
// DarkMode UI
// let darkMode = localStorage.getItem('darkMode');
// const darkModeToggle = document.querySelector('#dark-mode-toggle');

// apply fixed nav to header
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    navHeader.classList.add('fixed-nav');
  } else {
    navHeader.classList.remove('fixed-nav');
  }
});

// sidebar menu
hambugerMenu.addEventListener('click', function () {
  sidebarList.classList.toggle('show-links');
  hambugerMenu.classList.toggle('change');
  hambugerMenu.classList.toggle('change-color');
});

// close sidebar menu when click on links
sidebarList.addEventListener('click', function (event) {
  if (event.target.classList.contains('link')) {
    sidebarList.classList.remove('show-links');
    hambugerMenu.classList.remove('change');
    hambugerMenu.classList.remove('change-color');
  }
});
