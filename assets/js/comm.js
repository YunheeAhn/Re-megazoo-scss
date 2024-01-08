new Swiper('.mySwiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 0,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  },
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

new Swiper('.evnt-bnr', {
  // Optional parameters
  loop: true,

  spaceBetween: 100,
  slidesPerView : 1,

  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  },

  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

AOS.init();
