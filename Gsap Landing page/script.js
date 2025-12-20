function firstPageAnimation() {
    const tl = gsap.timeline();

    tl.from("nav h1", {
        y: -30,
        opacity: 0,
        delay: 0.5,
        duration: 1,
    })
    tl.from("nav ul li, nav button", {
        y: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
    })
    tl.from(".about-section .text-area h1", {
        x: -300,
        duration: 0.5,
        opacity: 0,
    })
    tl.from(".about-section .text-area p", {
        x: -300,
        opacity: 0,
        duration: 0.5,
    })
    tl.from(".about-section .text-area button", {
        opacity: 0,
        duration: 0.3,
    })
    tl.from(".about-section figure img", {
        opacity: 0,
        duration: 0.4,
    }, "-=1")
    tl.from(".buttom-row img", {
        y: 50,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2,
    })
}
firstPageAnimation();

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".service-section",
        scroller: "body",
        start: "top 70%",
        end: "top 0",
        scrub: 0.5,
    }
})
tl2.from(".service-text", {
    y: 20,
    opacity: 0,
    duration: 0.3,
});
tl2.from(".elem.light.left",{
    x: -300,
    opacity:0,
    duration: 0.5,
},"a1")
tl2.from(".elem.dark.right",{
    x: 300,
    opacity:0,
    duration:0.5,
},"a1")
tl2.from(".elem.dark.left",{
    x: -300,
    opacity:0,
    duration: 0.5,
},"a2");
tl2.from(".elem.light.right",{
    x:300,
    opacity: 0,
    duration:0.5,
})
