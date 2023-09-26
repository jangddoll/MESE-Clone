(function () {
    var controller = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({
        triggerElement: ".wrap",
        triggerHook: 0
    })
    .setClassToggle("#animation1", "visible")
    .addTo(controller)

    var revealElements = document.getElementsByClassName("animation2");
    for (var i=0; i<revealElements.length; i++) {
        var scene2 = new ScrollMagic.Scene({
            triggerElement: revealElements[i],
            triggerHook: 0.9,
            reverse: false
        })
        .setClassToggle(revealElements[i], "visible")
        .addTo(controller)
    }

}())
