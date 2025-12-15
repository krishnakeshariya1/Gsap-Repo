let initialPath = `M 20 100 Q 750 100 1500 100`;
const finalPath = `M 20 100 Q 750 100 1500 100`;

const string = document.querySelector(".string");

// string.addEventListener("mouseenter",(dets)=>{
//     console.log(dets);
// });
// string.addEventListener("mouseleave",(dets)=>{
//     console.log(dets);
// })

string.addEventListener("mousemove",(dets)=>{
    initialPath =`M 20 100 Q ${dets.x} ${dets.y} 1500 100`;

    gsap.to("svg path",{
        attr: {d : initialPath},
        duration: 0.2,
        ease : "power3.out"
    })
});
string.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr: {d : finalPath},
        duration: 1,
        ease: "elastic.out(1,0.3)",
    });
})