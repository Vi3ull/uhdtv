// Alpine
import Alpine from 'alpinejs';
import dropdown from './dropdown/_';

Alpine.data('dropdown', dropdown);

window.Alpine = Alpine;
Alpine.start();

// Swiper
import { Autoplay, Pagination, Navigation } from "swiper";

const options = {
  modules: [Autoplay, Pagination, Navigation],
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
}; 

const optionsObserver = {
  rootMargin: '50px 0px 0px',
}

const carouselObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      import(
        './carousel/_.js' /* webpackChunkName: "/js/carousel" */
      ).then( module => {
        const initCarousel = module.default;
        initCarousel( entry.target, {
          ...options, 
        } )
      });
      observer.unobserve(entry.target);
    }
  })
}, optionsObserver);

document
  .querySelectorAll( '.js-carousel' )
  .forEach( $el => {
    carouselObserver.observe($el)
})

import './video/_';
import './figure/_';