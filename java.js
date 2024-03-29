$(document).ready(function() {

  $("#nav li:nth-child(1)").click(function() {
    $('html, body').animate({
        scrollTop:  $(".header").offset().top-65
    }, 1000);
  });

  $("#nav li:nth-child(2)").click(function() {
    $('html, body').animate({
        scrollTop:  $(".cv").offset().top-65
    }, 1000);
  });

  $("#nav li:nth-child(3)").click(function() {
    $('html, body').animate({
        scrollTop:  $(".portfolio").offset().top-65
    }, 1000);
  });

  $("#nav li:nth-child(4)").click(function() {
    $('html, body').animate({
        scrollTop:  $(".contact").offset().top-65
    }, 1000);
  });

// Slider & description
  $('.slider-desc').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-proj'
  });
  $('.slider-proj').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '80px',
    asNavFor: '.slider-desc',
    dots: true,
    draggable: true,
    arrows: false,
    focusOnSelect: true
  });

});

anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: function(e, i, l) {
      var offset = -0.625 + 0.625*2*i;
      return offset + "em";
    }
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  