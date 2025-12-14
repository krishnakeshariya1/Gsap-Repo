gsap.from("#page1 .flower",{
    y: 300,
    duration : 1,
    rotate : 360,
});
// gsap.from("#page2 .flower",{
//     y: 300,
//     duration : 1,
//     rotate : 360,
//     scrollTrigger : {
//         trigger : "#page2 .flower",
//         scroller : "body",
//         start : "top 60%",
//     }
// });
gsap.from("#page2 h1",{
    x: 500,
    opacity:0,
    duration :1.4,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        start : "top 50%",
        markers : true,
    }
})
gsap.from("#page2 h2",{
    x: -500,
    opacity:0,
    duration :1.4,
    scrollTrigger: {
        trigger: "#page2 h2",
        scroller: "body",
        start : "top 59%",
    }
})

gsap.from("#page3 .flower",{
    scale : 0,
    duration: 1,
    rotate: 720,
    opacity: 0,
    scrollTrigger: {
        trigger : "#page3 .flower",
        scroller : "body",
        markers : true,
        start : "top 60%",
        end : "top 30%",
        scrub : 2,
    }
})