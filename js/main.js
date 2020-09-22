let count=0;
$(document).ready(function loop() {
  if (count === 0) {
    $('.circle1-pos').animate({top: "-95"}, 3000, "swing");
    $('.circle1-pos').animate({top: "-155"}, 3000, "swing");

    $('.circle2-pos').animate({top: "90"}, 3000, "swing");
    $('.circle2-pos').animate({top: "165"}, 3000, "swing");

    $('.circle3-pos').animate({top: "450"}, 3000, "swing");
    $('.circle3-pos').animate({top: "555"}, 3000, "swing");

    $('.circle5-pos').animate({top: "1400"}, 3000, "swing");
    $('.circle5-pos').animate({top: "1450"}, 3000, "swing");
  }

});
$('.circle4-pos').click(function (){
  count =1;
  $('.circle1-pos').animate({top: "-395"}, 700, "swing");
  $('.circle2-pos').animate({top: "-200"}, 1200, "swing");
  $('.circle3-pos').animate({top: "-650"}, 1500, "swing");
  $('.circle4-pos').css("background","white");
  $(document).css("background","black");
  $('.find').animate({top:"800"},2000,"swing");
});


