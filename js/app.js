'use strict';

// Nav UI element
const navHeader = document.querySelector('.nav-header');
const sidebarList = document.querySelector('.sidebar');
const hambugerMenu = document.querySelector('.hamburger');

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
