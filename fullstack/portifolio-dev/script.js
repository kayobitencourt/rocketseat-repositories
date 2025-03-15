gsap.registerPlugin(ScrollTrigger);

function animateOnScroll() {
  gsap.utils.toArray(".animate-on-scroll").forEach((element, index) => {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "top 25%",
        toggleActions: "play none none reverse",
      },
    });
  });
}

// Chamando a função global
animateOnScroll();
