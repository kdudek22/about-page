gsap.registerPlugin(ScrollTrigger);


//inital
gsap.timeline().fromTo(".initial-fade-in", {opacity: 0}, {opacity: 1, duration: 0.25, stagger: 0.35})

gsap.timeline()
    .from("#blue-box", {scale: 150,  duration: 2, ease: "power2.out"})
    .fromTo(".name", {opacity: 0, y: 100}, {opacity: 1, y: 0, stagger: 0.01, duration: 0.5})

//name scrolltrigger
gsap.fromTo("#blue-box", {scale: 1}, {scale: 0.8, backgroundColor: '#FFFFFF', color: "black", scrollTrigger: {trigger: "#blue-box", start: "bottom 15%", end: "bottom 5%", scrub: true}});

//about text scrolltrigger
gsap.fromTo(".about-text-show", {opacity: 0}, {opacity: 1, delay: 0.5, stagger: 0.5, duration: 0.5, scrollTrigger: {trigger: ".show-text", start: "top 80%"}})
gsap.fromTo(".about-skills-show", {opacity: 0}, {opacity: 1, delay: 0.5, stagger: 0.5, duration: 0.5, scrollTrigger: {trigger: ".about-skills-show", start: "top 80%"}})

//not used but this can be usefull in the future
//about color change
// gsap.to("#change-bg", { backgroundColor: "#80ED99", color: "white",
//     scrollTrigger:{trigger: "#expierience", start: "bottom center", end: "600% center", scrub: true, toggleActions:"play none reverse none"}})

//agh logo
gsap.from("#agh-logo",
     {x: () => window.innerWidth/2 + 50, duration: 2, rotation: 720, scrollTrigger:{trigger: "#agh-logo", start: "top 90%", end: "bottom 15%", rotation: 720, scrub: false, toggleActions: "play reverse play reverse"}})

document.querySelector("#agh-logo").addEventListener("mouseenter", () => {
gsap.to("#agh-logo", { scale: 1.2, duration: 0.5, ease: "power2.out" });
});

// Hover out
document.querySelector("#agh-logo").addEventListener("mouseleave", () => {
gsap.to("#agh-logo", { scale: 1, duration: 0.5, ease: "power2.out" });
});

//expierience scroll trigger
gsap.from(".expierience-show", {opacity: 0, stagger: 0.5, duration: 0.5, scrollTrigger:{trigger: ".expierience-show", start: "bottom 85%"}})

//projects scroll trigger
gsap.from(".projects-scroll-show", {opacity: 0, stagger: 0.5, duration: 0.5, scrollTrigger:{trigger: ".projects-scroll-show", start: "bottom 85%"}})

