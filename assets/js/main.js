$(document).ready(function(){

    /*========== Toggle ==========*/
   $(".testi-carousel").owlCarousel({
  autoplay: true,
  nav: true,
  navText: [
    '<i class="fa fa-arrow-left"></i>',
    '<i class="fa fa-arrow-right"></i>',
  ],
  // navText: [ 'prev', 'next' ],
  dots: false,
  loop: true,
  autoWidth: false,
  autoHeight: true,
  smartSpeed: 1000,
  autoplayTimeout: 10000,
  margin: 0,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
      autoplay: true,
      autoHeight: true,
      dots: true,
      nav: false,
    },
    600: {
      items: 2,
    },
    768: {
      items: 5,
      dots: true,
      nav: false,
    },
    1000: {
      items: 5,
    },
  },
});



});