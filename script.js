gsap.registerPlugin(ScrollTrigger);



gsap.timeline().fromTo(".initial-fade-in", {opacity: 0}, {opacity: 1, duration: 0.25, stagger: 0.35})

gsap.timeline()
    .from("#blue-box", {scale: 150,  duration: 2, ease: "power2.out"})
    .fromTo(".name", {opacity: 0, y: 100}, {opacity: 1, y: 0, stagger: 0.01, duration: 0.5})

gsap.fromTo("#blue-box", {scale: 1}, {scale: 0.5, backgroundColor: '#ff87ef',  scrollTrigger: {trigger: "#blue-box", start: "top 30%", scrub: true}});





// gsap.from("#agh-logo", {scale: 0.00, scrollTrigger: "#agh-logo"})

// gsap.fromTo("#agh-logo", {scale: 1}, {scale: 0.7, scrollTrigger: {trigger: "#agh-logo", start: "top 5%", scrub: true}});

gsap.to("#agh-logo", {y:10, duration:3, repeat: -1, yoyo: true, ease: "back.inOut"})

gsap.fromTo(".show-text", {opacity: 0}, {opacity: 1, stagger: 0.5, duration: 0.5, scrollTrigger: {trigger: ".show-text", start: "top 80%"}})

gsap.fromTo("#agh-logo", {rotation: 15}, {rotation: -15, duration: 5, repeat: -1, yoyo: true})

