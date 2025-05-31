// Load particles with configuration
tsParticles.load("tsparticles", {
    fullScreen: {
        enable: true,
        zIndex: -1, // Ensure particles appear behind your content
    },
    preset: "seaAnemone", // Use the fireworks preset directly
    particles: {
        number: {
            value: 300, // Adjust the number of particles
        },
        size: {
            value: 3, // Adjust the size of particles
        },
        move: {
            enable: true,
            speed: 2, // Adjust the speed of particle movement
        },
        opacity: {
            value: 0.80, // Adjust the transparency of particles
        },
        color: {
            value: "#07cadb", // Particle color // #07cadb
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: false,
                mode: "repulse", // Particles react on hover
            },
            onClick: {
                enable: true,
                mode: "push", // Adds particles when you click
            },
        },
        modes: {
            repulse: {
                distance: 100, // Distance for repulsion on hover
            },
            push: {
                quantity: 4, // Number of particles added on click
            },
        },
    },
});

// Optionally control particles with these methods
tsParticles.setOnClickHandler((event, particles) => {
    console.log("Particles clicked!", particles);
});

