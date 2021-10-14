$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    dots: false,
    margin: 30,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    slideTransition: 'ease-in-out',
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        slideBy: 1,
        autoplaySpeed: 1000,
      },
      740: {
        items: 2,
        slideBy: 1,
        autoplaySpeed: 800,
      },
      979: {
        items: 4,
        slideBy: 4,
        autoplaySpeed: 500,
      },
    },
  });
});
