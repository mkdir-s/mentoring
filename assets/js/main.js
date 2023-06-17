const burgerButton = document.querySelector('.header__burger'),
      header = document.querySelector('.header');

      
burgerButton.addEventListener('click', (e) => {
  header.classList.toggle('open');
})

const swiper = new Swiper('.reviews__slider', {
  loop: true,
  slidesPerView: 2.5,
  spaceBetween: 30,
  pagination: {
    el: '.reviews__swiper-pagination',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.3,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
