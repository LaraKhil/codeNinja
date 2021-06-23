import './sass/main.scss';

const domData = {
  openBurger: document.querySelector('.header__menu-open'),
  closeBurger: document.querySelector('.burger-menu__close'),
  burgerMenu: document.querySelector('.burger-menu'),

  aboutText: document.querySelector('.about-us__txt-target'),
  programText: document.querySelector('.program__text-target'),
  programBtn: document.querySelector('.program__button'),
  aboutBtn: document.querySelector('.about-us__button'),
};

document.querySelectorAll('.site-nav__link_burger').forEach(item =>
  item.addEventListener('click', () => {
    console.log('click');
    domData.burgerMenu.classList.remove('is-open');
    document.body.classList.remove('burger-open');
  }),
);

domData.openBurger.addEventListener('click', () => {
  domData.burgerMenu.classList.add('is-open');
  document.body.classList.add('burger-open');
});

domData.closeBurger.addEventListener('click', () => {
  domData.burgerMenu.classList.remove('is-open');
  document.body.classList.remove('burger-open');
});

domData.programBtn.addEventListener('click', () => {
  console.log(domData.aboutBtn.className);
  if (domData.programBtn.innerHTML === 'Read more') {
    domData.programText.classList.remove('is-hidden');
    domData.programBtn.innerHTML = 'less';
  } else {
    domData.programText.classList.add('is-hidden');
    domData.programBtn.innerHTML = 'Read more';
  }
});

domData.aboutBtn.addEventListener('click', () => {
  if (domData.aboutBtn.innerHTML === 'Read more') {
    domData.aboutText.classList.remove('is-hidden');
    domData.aboutBtn.innerHTML = 'less';
  } else {
    domData.aboutText.classList.add('is-hidden');
    domData.aboutBtn.innerHTML = 'Read more';
  }
});
