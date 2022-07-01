
export const config2={
  fpsLimit: 120,
  particles: {
    collision:{
      enable:true
    },
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#e86ff5",
      animation: {
        enable: true,
        speed: 20,
        sync: false
      }
    },
    shape: {
      type: "square"
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.3
      },
      
      
    },
    
    size: {
      value: 30,
      random: {
        enable: true,
        minimumValue: 15
      }
    },
    rotate: {
      value: 90,
      direction: "random",
      animation: {
        speed: 5,
        enable: true
      }
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      out_mode: "out"
    }
  },
  fullScreen: {
    enable: true,
    zIndex: -1
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
        
    }
  },
  detectRetina: true,
  background: {
    color: "#17163e"
  }
  }