import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);

const swiperOptions = {
  loop: true,
  freeMode: true,
  grabCursor: true,
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 1,
    //disableOnInteraction: true,
  },
  //freeMode: true,
  speed: 3000,
  freeModeMomentum: false,

  breakpoints: {

    550: {
      slidesPerView: '3.5',
    },

    768: {
      slidesPerView: '5',
    },

    1366: {
      slidesPerView: '7',
    },

  },

};

const swiper = new Swiper(".mySwiper", swiperOptions);












