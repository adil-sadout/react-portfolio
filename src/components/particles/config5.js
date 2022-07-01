export const config5={
    fpsLimit: 120,
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ff0000",
        animation: {
          enable: true,
          speed: 20,
          sync: true
        }
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: 10,
        random: {
          enable: true,
          minimumValue: 15
        }
      },
      rotate: {
        value: 0,
        direction: "clockwise",
        animation: {
          speed: 5,
          enable: true
        }
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "light"
        },
        resize: true
      },
      
      modes: {
        light: {
          area: {
            gradient: {
              start: "3b5e98",
              stop: "#151715"
            }
          },
          shadow: {
            color: "#151715"
          }
        }
      }
    },
    
    detectRetina: true,
    background: {
      color: "#151715"
    }
  }