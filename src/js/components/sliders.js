import Swiper, { Navigation, Pagination } from 'swiper';
import { isMobile, isSmallTablet } from './check-viewport';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.hero__slider', {
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.hero__next',
    prevEl: '.hero__prev',
  },
});

function initMobSwiperServe() {
  let mobSwiper;

  if (isMobile()) {
    mobSwiper = new Swiper('.service__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 24,
    });
  } else {
    if (mobSwiper) {
      mobSwiper.destroy();
    }
  }
}

const swiperTestimonial = new Swiper('.testimonial__swiper', {
  spaceBetween: 24,
  slidesPerView: 2,
  navigation: {
    nextEl: '.testimonial__next',
    prevEl: '.testimonial__prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 'auto',
    },
    320: {
      slidesPerView: 1,
    }
  },
});

const swiperBlog = new Swiper('.blog__swiper', {
  spaceBetween: 24,
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 'auto',
    }
  },
});

function initTabSwiperStaff() {
  let tabSwiper;

  if (isSmallTablet()) {
    tabSwiper = new Swiper('.staff__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 24,
    });
  } else {
    if (tabSwiper) {
      tabSwiper.destroy();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initMobSwiperServe();
  initTabSwiperStaff();
});

window.addEventListener("resize", () => {
  initMobSwiperServe();
  initTabSwiperStaff();
});
