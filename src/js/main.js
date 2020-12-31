// Import Alpine.js
import 'alpinejs';

// Import Cruip utilities
import { focusHandling } from 'cruip-js-toolkit';

// Import aos
import AOS from 'aos';

// Import Swiper
import Swiper, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

AOS.init({
  once: true,
  disable: 'phone',
  duration: 750,
  easing: 'ease-out-quart',
});

Swiper.use([Autoplay, Navigation]);
// eslint-disable-next-line no-unused-vars
const carousel = new Swiper('.carousel', {
  slidesPerView: 'auto',
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  initialSlide: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 7000,
  },
  navigation: {
    nextEl: '.carousel-next',
    prevEl: '.carousel-prev',
  },
});

// import component from './components/component';

document.addEventListener('DOMContentLoaded', () => {
  focusHandling('outline');
});

// Light switcher
const lightSwitches = document.querySelectorAll('.light-switch');
if (lightSwitches.length > 0) {
  lightSwitches.forEach((lightSwitch, i) => {
    if (localStorage.getItem('dark-mode') === 'true' || !('dark-mode' in localStorage)) {
      // eslint-disable-next-line no-param-reassign
      lightSwitch.checked = true;
    }
    lightSwitch.addEventListener('change', () => {
      const { checked } = lightSwitch;
      lightSwitches.forEach((el, n) => {
        if (n !== i) {
          // eslint-disable-next-line no-param-reassign
          el.checked = checked;
        }
      });
      if (lightSwitch.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dark-mode', true);
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('dark-mode', false);
      }
    });
  });
}
