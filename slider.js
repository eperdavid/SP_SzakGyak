
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
        },
    });