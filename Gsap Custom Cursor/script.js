const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const img = document.querySelector(".ovlay");

main.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
        x : dets.x,
        y: dets.y,
        duration: 1
    });
});

img.addEventListener("mouseenter",()=>{
    cursor.textContent = "view img";
    gsap.to(cursor,{
        scale:2,
        backgroundColor :"#f1f1f17e",
    })
});
img.addEventListener("mouseleave",()=>{
    cursor.textContent ="";
    gsap.to(cursor,{
        scale : 1,
        backgroundColor : "#fff",
    })
})
