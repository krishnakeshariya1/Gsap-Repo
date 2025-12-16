const menu = document.querySelector("#menu");
const crose = document.querySelector("#close");

const tl = gsap.timeline();

tl.to(".full", {
    right: 0,
    duration: 0.7,
});
tl.from(".full h4", {
    x: 100,
    duration: 0.6,
    stagger: 0.27,
    opacity: 0,
});
tl.from(".full i", {
    opacity: 0,
    duration: 0.3,
});
tl.pause()

menu.addEventListener("click", () => {
    tl.play()
});

crose.addEventListener("click", () => {
   tl.reverse()
})