import Swiper, { Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';

const createSwiper = () => {
  const pagination = document.querySelector('.brend-pagination__swiper-pagination');
  return new Swiper('.brend__swiper', {
    direction: 'horizontal',
    modules: [Pagination],
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1.35,
    pagination: {
      el: pagination,
      clickable: true,
    },
  });
}

const createSwiperRectangle = () => {
  const pagination = document.querySelector('.rectangle-pagination__swiper-pagination');
  return new Swiper('.rectangle__swiper', {
    direction: 'horizontal',
    modules: [Pagination],
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1.35,
    pagination: {
      el: pagination,
      clickable: true,
    },
  });
}

const createSwiperPrice = () => {
  const pagination = document.querySelector('.rectangle-pagination__swiper-pagination');
  return new Swiper('.price__swiper', {
    direction: 'horizontal',
    modules: [Pagination],
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1.35,
    pagination: {
      el: pagination,
      clickable: true,
    },
  });
}

let swiper = null;
let swiperRectangle = null;
let swiperPrice = null;

function createSSS() {
  if (window.innerWidth > 500) {
    if (swiper) {
      swiper.destroy();
      swiper = null;
    }
    if (swiperRectangle) {
      swiperRectangle.destroy();
      swiperRectangle = null;
    }
    if (swiperPrice) {
      swiperPrice.destroy();
      swiperPrice = null;
    }
  } else {
    if (!swiper) swiper = createSwiper();
    if (!swiperRectangle) swiperRectangle = createSwiperRectangle();
    if (!swiperPrice) swiperPrice = createSwiperPrice();
  }
}
createSSS()
window.addEventListener('resize', createSSS);



const button = document.querySelector('.button-container__brend');
const nav = document.querySelectorAll('.brand-list');
const butConainer = document.querySelector('.brend__button-container');
const img = butConainer.querySelector('.button-container__image');

button.addEventListener("click", function (evt) {

  for (let i = 0; i < nav.length; i++) {
    nav[i].classList.toggle('brand-list--open');
  };
  img.classList.toggle('button-container__image--rotate');
  if (nav[0].classList.contains('brand-list--open')) {
    button.textContent = 'Скрыть';
  } else {
    button.textContent = 'Показать все';
  }

});

const buttonParagraf = document.querySelector('.button-container__paragraf');
const navParagraf = document.querySelectorAll('.paragraf__paragraph');
const ParagrafConainer = document.querySelector('.button-container');
const imgParagraf = ParagrafConainer.querySelector('.button-container__image');

buttonParagraf.addEventListener("click", function (evt) {

  for (let i = 0; i < navParagraf.length; i++) {
    navParagraf[i].classList.toggle('paragraf--open');
  };
  imgParagraf.classList.toggle('button-container__image--rotate');
  if (navParagraf[0].classList.contains('paragraf--open')) {
    buttonParagraf.textContent = 'Скрыть';
  } else {
    buttonParagraf.textContent = 'Показать все';
  }

});

const buttonBurger = document.querySelector('.item__button');
const menu = document.querySelector('.menu');
const bodyWindow = document.querySelector('.body__window');


const buttonRectangle = document.querySelector('.button-container__rectangle');
const listRectangle = document.querySelector('.rectangle__swiper-wrapper');
const RectangleConainer = document.querySelector('.rectangle__button-container');
const imgRectangle = RectangleConainer.querySelector('.button-container__image');

buttonRectangle.addEventListener("click", function (evt) {

  listRectangle.classList.toggle('rectangle__swiper-wrapper-open');

  imgRectangle.classList.toggle('button-container__image--rotate');
  if (listRectangle.classList.contains('rectangle__swiper-wrapper-open')) {
    buttonRectangle.textContent = 'Скрыть';
  } else {
    buttonRectangle.textContent = 'Показать все';
  }

});

buttonBurger.addEventListener("click", function (evt) {
  menu.classList.add('menu--open');
  call.classList.remove('call--open');
  connection.classList.remove('connection--open');
  bodyWindow.classList.add('blur-background');
});

const esc = document.querySelector('.navigation-topic__button');
esc.addEventListener("click", function (evt) {
  menu.classList.remove('menu--open');
  bodyWindow.classList.remove('blur-background');
});

function closeMenu() {
  if (window.innerWidth > 1024) {
    if (menu.classList.contains('menu--open')) {
      menu.classList.remove('menu--open');
    }
  }
}
closeMenu()
window.addEventListener('resize', closeMenu);

const buttonСall = document.querySelector('.nav-links__button-call');
const call = document.querySelector('.call');
const buttonСallTwo = document.querySelector('.navigation__item:nth-child(4)')
const bodySection = document.querySelector('.body__section');


buttonСall.addEventListener("click", function (evt) {
  call.classList.add('call--open');
  menu.classList.remove('menu--open');
  connection.classList.remove('connection--open');
  bodySection.classList.add('blur-background');
});

buttonСallTwo.addEventListener("click", function (evt) {
  call.classList.add('call--open');
  menu.classList.remove('menu--open');
  connection.classList.remove('connection--open');
  bodySection.classList.add('blur-background');
});

const callEsc = document.querySelector('.call__close');
callEsc.addEventListener("click", function (evt) {
  call.classList.remove('call--open');
  connection.classList.remove('connection--open');
  bodySection.classList.remove('blur-background');
  bodyWindow.classList.remove('blur-background');
});

const buttonConnection = document.querySelector('.nav-links__item:nth-child(2)');
const connection = document.querySelector('.connection');
const buttonConnectionTwo = document.querySelector('.navigation__item:nth-child(5)')

buttonConnection.addEventListener("click", function (evt) {
  connection.classList.add('connection--open');
  menu.classList.remove('menu--open');
  call.classList.remove('call--open');
  bodySection.classList.add('blur-background');
});

buttonConnectionTwo.addEventListener("click", function (evt) {
  connection.classList.add('connection--open');
  menu.classList.remove('menu--open');
  call.classList.remove('call--open');
  bodySection.classList.add('blur-background');
});

const connectionEsc = document.querySelector('.header-connection__close');
connectionEsc.addEventListener("click", function (evt) {
  connection.classList.remove('connection--open');
  bodySection.classList.remove('blur-background');
  bodyWindow.classList.remove('blur-background');
});
