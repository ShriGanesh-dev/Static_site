$(document).ready(function loop() {
  $('.circle1-pos').animate({top:"-95"},5000,"swing");
  $('.circle1-pos').delay(1000).animate({top:"-135"},6000,"swing",loop);

  $('.circle2-pos').animate({top:"100"},5000,"swing");
  $('.circle2-pos').animate({top:"155"},5000,"swing",loop);

  $('.circle3-pos').delay(2000).animate({top:"450"},5000,"swing");
  $('.circle3-pos').delay(2000).animate({top:"555"},5000,"swing",loop);

  $('.circle5-pos').animate({top:"1400"},5000,"swing");
  $('.circle5-pos').animate({top:"1450"},5000,"swing",loop);
});

