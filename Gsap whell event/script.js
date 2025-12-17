window.addEventListener("wheel",(dets)=>{
    if(dets.deltaY > 1){
        gsap.to(".marque",{
            transform : "translateX(-200%)",
            duration:4,
            repeat : -1,
            ease: "none",
        })
        gsap.to(".marque i",{
            rotate: 180,
            duration: 0.1
        })
    }
    else{
        gsap.to(".marque",{
            transform : "translateX(0)",
            repeat :-1,
            ease: "none",
            duration: 4,
        })
        gsap.to(".marque i",{
            rotate : 0,
            duration:0.1
        })
    }
})