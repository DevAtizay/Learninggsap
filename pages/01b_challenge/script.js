
gsap.to('.card', {
    opacity: 1,
    scale: 1,
    duration: 5,
    onComplete: () => {
        gsap.to('.card', {
            scale:1.1,
            repeat: -1,
            yoyo: true,
            duration: 0.5,
        });
    }
});


