//nav
const btnClose = document.querySelectorAll(".btn_close_gnb span");
const btnOpen = document.querySelectorAll(".btn_open_gnb span");

document.querySelector(".btn_open_gnb").addEventListener("click", function() {
    document.querySelector(".header").classList.add("active");
    document.querySelector(".nav").classList.add("is_opened");
    document.querySelector(".nav").style.transform = "TranslateX(0)";
})

document.querySelector(".btn_close_gnb").addEventListener("click", function() {
    document.querySelector(".header").classList.remove("active");
    document.querySelector(".nav").classList.remove("is_opened");
    document.querySelector(".nav").style.transform = "translateX(-100%)";
})

//swiper
var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});