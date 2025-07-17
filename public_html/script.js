// Typing effect
var typed = new Typed(".typing", {
  strings: ["Web Development", "Java Development", "Spring Boot Projects", "MongoDB APIs"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

// Particles.js background
particlesJS("particles-js", {
  particles: {
    number: { value: 75 },
    size: { value: 3 },
    line_linked: { enable: true },
    move: { speed: 2 }
  }
});
