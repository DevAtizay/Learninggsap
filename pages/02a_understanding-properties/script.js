import gsap from 'gsap';
gsap.to(".box", {
    opacity:1,
    rotation:180,
    background:'#f15128',
    scale:1.25,
    duration:2,
    ease:'bounce',
    repeat:-1,
    yoyoEase:'true',
    repeatDelay:0.2,
    stagger:4,
});