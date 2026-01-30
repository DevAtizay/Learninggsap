gsap.to('.card', {
    opacity: 1,
    scale: 1,
    duration: 5,
    onComplete: () => {
        gsap.to('.card', {
            x: -21,
            repeat: -1,
            yoyo: true,
            duration: 0.5,
        });
    }
});


