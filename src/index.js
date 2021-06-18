import './sass/main.scss';

const domData = {
  openBurger: document.querySelector('.header__menu-open'),
  closeBurger: document.querySelector('.burger-menu__close'),
  burgerMenu: document.querySelector('.burger-menu'),

  aboutText: document.querySelector('.about-us__txt'),
  programText: document.querySelector('.program__text-target'),
  programBtn: document.querySelector('.program__button'),
  aboutBtn: document.querySelector('.about-us__button'),
};

domData.openBurger.addEventListener('click', () => {
  domData.burgerMenu.classList.add('is-open');
});

domData.closeBurger.addEventListener('click', () => {
  domData.burgerMenu.classList.remove('is-open');
});

// about-us__txt target is-hidden
// program__text target is-hidden
// program__button;
// about - us__button;
domData.programBtn.addEventListener('click', () => {
  domData.programText.classList.remove('is-hidden');
});
