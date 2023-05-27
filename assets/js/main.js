const burgerButton = document.querySelector('.header__burger'),
      header = document.querySelector('.header');

      
burgerButton.addEventListener('click', (e) => {
  header.classList.toggle('open');
})