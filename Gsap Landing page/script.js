const tl = gsap.timeline();

tl.from("nav h1", {
    y: -30,
    opacity: 0,
    delay : 0.5,
    duration: 1,
})
tl.from("nav ul li, nav button", {
    y: -30,
    opacity: 0,
    duration: 1,
    stagger : 0.1,
})
tl.from(".about-section .text-area h1",{
    x: -300,
    duration:0.5,
    opacity: 0,
})
tl.from(".about-section .text-area p",{
    x: -300,
    opacity: 0,
    duration: 0.5,
})
tl.from(".about-section .text-area button",{
    opacity :0,
    duration: 0.3,
})
tl.from(".about-section figure img",{
    opacity : 0,
    duration:0.4,
},"-=1")