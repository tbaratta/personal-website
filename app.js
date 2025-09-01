// app.js
tsParticles.load("tsparticles", {
    fullScreen: { enable: false },      // you already size/position #tsparticles in CSS
    detectRetina: true,
    fpsLimit: 60,
    background: { color: "transparent" },
  
    interactivity: {
      events: {
        onHover: { enable: false, mode: ["grab", "bubble"] },
        onClick: { enable: false, mode: ["push"] },
        resize: true
      },
      modes: {
        grab:   { distance: 140, links: { opacity: 0.6 } },
        bubble: { distance: 160, duration: 2, size: 6, opacity: 0.8 },
        push:   { quantity: 3 }
      }
    },
  
    particles: {
      number: { value: 70, density: { enable: true, area: 800 } },
      // 🎨 multi-color palette (edit freely)
      color: {
        value: ["#05ecfc", "#700bdb", "#b328eb", "#5308c4", "#080fc9", "#340696"]
      },
      shape: { type: "circle" },
      opacity: { value: 0.6, random: { enable: true, minimumValue: 0.3 } },
      size: { value: { min: 2, max: 4 } },
  
      // linked lines also pick colors
      links: {
        enable: true,
        color: { value: "random" },      // random link color each frame
        distance: 130,
        opacity: 0.4,
        width: 1
      },
  
      move: {
        enable: true,
        speed: 1.2,
        outModes: { default: "out" }
      }
    }
  });
  