$(function () {
  $('.cover-slick').slick({
    infinite: true,
    arrows: true,
    dots: true,

    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '2rem'
        }
      }
    ]
  });
});