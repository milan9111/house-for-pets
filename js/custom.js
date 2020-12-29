$(document).ready(function(){
  $('.slider').slick({
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/long-left-arrow.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./images/long-right-arrow.png'>",
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    easing: 'ease',
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
  });
});

