//윈도우 사이즈가 모바일일 때 cat-img m을 찾아서 fade-in class를 붙여주고 pc 사이즈일 땐 떼줌

const fadeEls = document.querySelectorAll(".title-box .fade-in");

fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, .5, {
        delay: (index + 1) * .3,
        opacity: 1,
        y: 0
    });
});

(function() {
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: '.content-box',
        reverse: false
    })
    .setClassToggle('.content-box .fade-in', 'show')
    .addTo(controller)
}())





