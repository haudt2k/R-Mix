$(document).ready(function () {
    $(".image-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: false,
      autoplay: true,
      autoplayspeed: 2000,
      arrows: true,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-angle-left" style="color: #ffffff;"></i></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-angle-right" style="color: #ffffff;"></i></button>`,
      dots: true,
      responsive: [
        {        
          breakpoint: 989,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
          },
        }
      ],
    });
  });

//nav 
const hamburger =  document.querySelector('.hamburger');
const menu =  document.querySelector('.menu');
hamburger.addEventListener('click', function(){
    this.classList.toggle('open');
    menu.classList.toggle('open');
})