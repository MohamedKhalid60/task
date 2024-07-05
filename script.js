// script.js
var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000, // 5 seconds
        disableOnInteraction: false,
    },
});
