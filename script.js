var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top top",
        end:"top -100%",
        pin:true,
        markers:true,
        scrub:1
    }
})

tl.to(".elem1",{
    clipPath:`polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`,
    backgroundPosition:"0 200%"
},"a")

tl.to(".elem2",{
    clipPath:` polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
    backgroundPosition:"0 100%"
},"a")

tl.to(".elem2",{
    clipPath:`polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`,
    backgroundPosition:"0 200%"
},"b")
tl.to(".elem3",{
    clipPath:`polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
    backgroundPosition:"0 100%"
},"b")