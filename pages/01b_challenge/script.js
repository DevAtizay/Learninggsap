import gsap from "gsap";

    // Pulsing glow animation
    gsap.to(".card", {
      boxShadow: "0 20px 80px rgba(124, 249, 216, 0.6)",
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
  