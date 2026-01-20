$(function () {
  const $slider = $('.cover-slick');

  function toggleSlick() {
    if (window.matchMedia('(max-width: 767.8px)').matches) {
      if (!$slider.hasClass('slick-initialized')) {
        $slider.slick({
          infinite: true,
          dots: true,
          arrows: true,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '2rem'
        });
      }
    } else {
      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }
    }
  }

  toggleSlick();
  $(window).on('resize', toggleSlick);
});



const $slider = $('.cover-slick');
$slider.slick({
  infinite: true,
  slidesToShow: 1,
  dots: false
});
const $dots = $('.cover-slick-dots .dot');

$dots.each(function(index){
  $(this).on('click', function(){
    $slider.slick('slickGoTo', index);
    $dots.removeClass('dot--active');
    $(this).addClass('dot--active');
  });
});

$slider.on('afterChange', function(event, slick, currentSlide){
  $dots.removeClass('dot--active');
  $dots.eq(currentSlide).addClass('dot--active');
});
