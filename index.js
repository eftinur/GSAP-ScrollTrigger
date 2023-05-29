gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  content: "#smooth-content",
  smooth: 2,
  effects: true,
  smoothTouch: 0.1,
});

// Data Speed Controls
/*
smoother.effects(".lag_sample", {
  speed: 0.5,
  lag: (i) => i * 1,
});
*/

smoother.effects("img", { speed: "auto" });

// GSAP ScrollTrigger
gsap.to(".box-c", {
  rotate: 360,
  scrollTrigger: {
    trigger: ".box-c",
    start: "center center",
    markers: true,
  },
});

gsap.to(".box-a", {
  scrollTrigger: {
    trigger: ".box-a",
    start: "top center",
    end: "+=200px",
    markers: true,
    pin: true,
  },
});

const { innerHeight } = window;

// Zoom Out on Scrolling
gsap.from(".zoom_out h2", {
  scale: 50,
  opacity: 0,
  stagger: 0.25,
  duration: 3,
  scrollTrigger: {
    trigger: ".zoom_out",
    pin: true,
    end: `+=${innerHeight * 1.3}`,
    scrub: 3,
    markers: true,
  },
});

// Zoom In on Scrolling
gsap.to(".zoom_in h2", {
  scale: 50,
  opacity: 0,
  stagger: 0.25,
  duration: 3,
  scrollTrigger: {
    trigger: ".zoom_in",
    pin: true,
    end: `+=${innerHeight * 1.3}`,
    scrub: 3,
    markers: true,
  },
});
