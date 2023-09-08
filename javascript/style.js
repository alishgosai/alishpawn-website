const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click",() =>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
}))

jQuery(function ($){

  $('.course-title-details').slick({
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 2000,
    nextArrow: '<div class="position-absolute left-arrow-course"><img src="image/left-arrow.png" alt=""></div>',
    prevArrow: '<div class="position-absolute right-arrow-course"><img src="image/right-arrow.png" alt=""></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2 ,
          slidesToScroll: 2
        }
      }
    ]
  });
});