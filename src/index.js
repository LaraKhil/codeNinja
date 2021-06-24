import { speed } from 'jquery';
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
    domData.programBtn.innerHTML = 'Less';
  } else {
    domData.programText.classList.add('is-hidden');
    domData.programBtn.innerHTML = 'Read more';
  }
});

domData.aboutBtn.addEventListener('click', () => {
  if (domData.aboutBtn.innerHTML === 'Read more') {
    domData.aboutText.classList.remove('is-hidden');
    domData.aboutBtn.innerHTML = 'Less';
  } else {
    domData.aboutText.classList.add('is-hidden');
    domData.aboutBtn.innerHTML = 'Read more';
  }
});

$('.review__slider').slick({
  speed: 500,

  arrows: true,
  asNavFor: '.review__slider-txt',

  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10px',
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  mobileFirst: true,
});
$('.review__slider-txt').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // fade: true,
  asNavFor: '.review__slider',
  
});
