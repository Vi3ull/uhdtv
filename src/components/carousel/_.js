import Swiper from "swiper";
import throttle from "../!common/utils/throttle/_";

export default function initCarousel($carousel, options) {
  const init = () => {
    options = {
      ...options,
      direction: 'horizontal',
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      speed: 700,
      wrapperClass: "js-carousel-wrapper",
      slideClass: "js-carousel-slide",
      slideActiveClass: "carousel-slide-active",
      slideNextClass: "carousel-slide-next",
      slidePrevClass: "carousel-slide-prev",
      navigation: {
        nextEl: ".carousel__navigation-next",
        prevEl: ".carousel__navigation-prev",
      },
      pagination: {
        el: ".carousel__pagination",
        clickable: true,
        bulletActiveClass: "carousel__pagination-bullet--state--active",
        bulletClass: "carousel__pagination-bullet",
        bulletElement: "li",
      },
    }

    const slidesPerView = window.getComputedStyle($carousel, null).getPropertyValue("--carouselSlidesCount");
    const carouselSlidesGap = window.getComputedStyle($carousel, null).getPropertyValue("--carouselSlidesGap");
    const $pagination = $carousel.querySelector(".carousel__pagination");
    
    if ($carousel.classList.contains('carousel--type--vertical')) options.direction = 'vertical';
    if (slidesPerView != "auto") options.slidesPerView = slidesPerView;
    if (carouselSlidesGap != "0") options.spaceBetween = parseInt(carouselSlidesGap.replace(/\D+/g,""));
    if ($pagination) options.pagination.el = $pagination;
    
    $carousel.classList.add("carousel--inited");
    const carousel = new Swiper($carousel, options);
  }

  init();
  
  const optimizedHandler = throttle(init, 250);
  window.addEventListener("resize", optimizedHandler)
};