tsParticles.load("tsparticles", {
  background: {
    color: {
      value: "#0d0d0d" // match your site's background
    }
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab" // lines stretch when hovered
      },
      onClick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 0.7
        }
      },
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#00faff" // light neon cyan — clean & techy
    },
    shape: {
      type: "polygon",
      options: {
        polygon: {
          sides: 6 // hexagon shape (you can change to 5 for pentagon)
        }
      }
    },
    opacity: {
      value: 0.6,
      random: true
    },
    size: {
      value: 4,
      random: true
    },
    links: {
      enable: true,
      distance: 140,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      outModes: {
        default: "bounce"
      }
    }
  },
  detectRetina: true
});
