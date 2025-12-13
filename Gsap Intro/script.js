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
    repeat: -1,
})