const ham = document.getElementById("ham");
const nav = document.getElementById("nav-menu");


ham.onclick = function() {
  if(nav.style.left === '-100%') {
    nav.style.left = '0'
  }else{
    nav.style.left = '-100%'
  }
};

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  clickable: true,
  grabCursor:true,

  autoplay:{
  delay:1000},
  spaceBetween: 10,
  

  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 60
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 100
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 60
    }
  }
  

}); // swiper
