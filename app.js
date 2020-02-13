const navBtn = document.querySelector('#nav-btn');
const navbar = document.querySelector('#navbar');
const navClose = document.querySelector('#nav-close');

navBtn.addEventListener('click', () => {
  navbar.classList.add('showNav');
});

navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav');
});
