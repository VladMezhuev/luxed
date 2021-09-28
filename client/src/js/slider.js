/* eslint-disable no-unused-vars */

import Swiper from '../../node_modules/swiper/swiper-bundle';

const mainSliderOptions = {
  speed: 800,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: false,
  breakpoints: {
    1200: {
      navigation: {
        prevEl: '.main-slider-prev',
        nextEl: '.main-slider-next',
      },
      pagination: {
        el: '.swiper-pagination',
        renderBullet: function A(index, className) {
          return `<div class= ${className}> <span class="number">${index + 1}</span> <span class="line"></span></div>`
        },
      },
    },
  },
}

const swiper = new Swiper('.slider-bg', mainSliderOptions);
