
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            910: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
        },
    });


var swiper = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


function resNav(){
  let nav = document.getElementById("navBar");
  nav.classList.toggle("selectedHamburger");
}

  
let icon = document.getElementById("dark-mode-btn");

icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme"))
  {
    icon.className = "fa-solid fa-sun fa-xl";
    
  }
  else{
    icon.className = "fa-solid fa-moon fa-xl";
  }
}


