// // Swiper
// import { Autoplay, Pagination, Navigation } from "swiper";

// const options = {
//   modules: [Autoplay, Pagination, Navigation],
//   loop: false,
//   slidesPerView: "auto",
//   speed: 700,
//   // autoplay: {
//   //   delay: 5000,
//   //   disableOnInteraction: false,
//   //   pauseOnMouseEnter: true,
//   // },
//   wrapperClass: "js-carousel-wrapper",
//   slideClass: "js-carousel-slide",
//   slideActiveClass: "carousel-slide-active",
//   slideNextClass: "carousel-slide-next",
//   slidePrevClass: "carousel-slide-prev",
//   pagination: {
//     el: ".carousel__pagination",
//     clickable: true,
//     bulletActiveClass: "carousel__pagination-bullet--state--active",
//     bulletClass: "carousel__pagination-bullet",
//     bulletElement: "li",
//   },
// }; 

// // AOS
// // import AOS from 'aos';

// // AOS.init();

// // Alpine
// import Alpine from 'alpinejs';
// import focus from '@alpinejs/focus';
// import menu from './alpine/menu';
// import dropdown from './alpine/dropdown';
// import modal from './alpine/modal';
// import handleScroll from './alpine/handleScroll';
// import timer from './alpine/timer';

// Alpine.plugin(focus)
// Alpine.data('menu', menu)
// Alpine.data('dropdown', dropdown)
// Alpine.data('modal', modal)
// Alpine.data('scrollLock', scrollLock)
// Alpine.data('handleScroll', handleScroll)
// Alpine.data('timer', timer)

// window.Alpine = Alpine;
// Alpine.start();

// // Utils
// import initInView from './utils/initInView/_';
// import scrollLock from './utils/scrollLock/_';

// document.querySelectorAll( '.js-carousel' ).forEach( $el => {
//   if (document.querySelectorAll( '.js-carousel' )) {
//     initInView( $el, () => {
//       import(
//         './carousel/_.js' /* webpackChunkName: "/js/carousel" */
//       ).then( module => {
//         const initCarousel = module.default;
//         initCarousel( $el, {
//           ...options, 
//         } )
//       });
//     });
//   }
// });