const burgerOpen = document.querySelector('.page-header__burger');
const burgerClose = document.querySelector('.burger-menu__close');
const burgermMenu = document.querySelector('.burger-menu');

burgerOpen.addEventListener('click', () => {
  burgermMenu.classList.add('active');
});

burgerClose.addEventListener('click', () => {
  burgermMenu.classList.remove('active');
});
