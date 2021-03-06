"use strict";

(function() {
  // Карусель 'События и мероприятия'
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: ['<img src="img/icon__arrow-left.svg" alt="" width="72" height="72">', '<img src="img/icon__arrow-right.svg" alt="" width="72" height="72">'],
    responsive: {
      0: {
        autoWidth: false,
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
      },
      992: {
        autoWidth: false,
        items: 1,
        autoplay:false,
      }
    }
  });
})();

const formSend = document.querySelector('.form__send');
formSend.reset();

formSend.addEventListener('submit', (event) => {
  event.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.open('POST', formSend.action);
  xhr.send(new FormData(formSend));
  alert('Спасибо, мы свяжемся с Вами в ближайшее время!');
  formSend.reset();
});
