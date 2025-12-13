gsap.to("#box", {
    x: 1300,
    delay: 1,
    duration: 1.8,
    backgroundColor: "pink",
    rotate: 360,
    repeat :-1,
    yoyo: 1,
});
gsap.from("h1", {
    y : 30,
    opacity: 0,
    delay: 1,
    duration: 1,
    stagger: 1,
})

const tl = gsap.timeline();
tl.to(".f1",{
    duration: 1.8,
    backgroundColor: "pink",
    rotate: 360,
});
tl.to(".f2",{
    duration: 1.8,
    backgroundColor: "pink",
    rotate: 360,
});
tl.to(".f3",{
    duration: 1.8,
    backgroundColor: "pink",
    rotate: 360,
})