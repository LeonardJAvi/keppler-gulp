$(document).ready(function(){
// $(".single-item").slick({
// autoplay: true,
// autoplaySpeed: 3000,
// speed: 500,
// infinite: true,
// cssEase: 'linear',
// fade: true,
// arrows: true,
// dots: true,
// });
$('.product').slick({
infinite: true,
//initialSlide: 1,
slidesToShow: 3,
slidesToScroll: 1,
arrows: true,
//centerMode: true,
dots: false,
});

$('.galery').slick({
    infinite: true,
    //initialSlide: 1,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    //centerMode: true,
    dots: false,
    });



});


