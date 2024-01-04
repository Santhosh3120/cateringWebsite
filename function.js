let image = document.getElementById('homeimage'); // bg changer
let images = ['homebg1.jpg', 'homebg2.jpg', 'homebg3.jpg','serimg4.jpg'];

setInterval(function () {
    let random = Math.floor(Math.random()*4);
    image.style.backgroundImage = "url(./images/" + images[random] + ")";
}, 2300);


var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});