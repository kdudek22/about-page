console.log(window.innerWidth)

gsap.fromTo("#small-yellow", {x: "100vw"}, {x: "0px", duration: 2, repeat: -1, yoyo: true})

gsap.fromTo("#medium-red", {x: "100vw"}, {x: "10vw", duration: 3, repeat: -1, yoyo: true})

gsap.fromTo("#medium-yellow", {x:"0vw"}, {x:"100vw", duration: 2, repeat: -1, yoyo: true})

gsap.timeline().fromTo(".initial-fade-in", {opacity: 0}, {opacity: 1, duration: 0.5, stagger: 0.5})

// gsap.from("#blue-box", {height: "100vh", width: "100vh", duration: 1, delay: 1})
