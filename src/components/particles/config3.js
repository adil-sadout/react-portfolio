export const config3={
    preset: "triangles",
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ["push"],
        },
        onHover: {
        enable: true,
        mode: "connect",
        color:"white",
        parallax: { enable: true, force: 1, smooth: 20000 }
        },
        resize: true,
      },
      modes: {
        
        push: {
          quantity: 2,
        },
        grab: {
          distance: 200,
        },
        
        light:{},
        repulse: {
          distance: 10,
          duration: 1,
          speed:1
        },
        attract: {
          distance: 500,
          duration: 1,
        },
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    particles: {
      rotate:{
        direction:"clockwise",
        value:90,
        animation:{
          enable:true,
          speed:5
        }
        
      },
      color: {
        value: "#198754",
        animation: {
          enable: true,
          speed: 50,
          sync: true,
          
        },
        
      },
      links: {
        color: "#ffffff",
        distance: 100,
        enable: false,
        opacity: 0.5,
        width: 1,
      },
      
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: true,
        speed: 0.1,
        straight: false,
        
      },
      number: {
        density: {
          enable: true,
          area: 700,
        },
        value: 10,
      },
      opacity: {
        value: 1
      },
      shape: {
        type: "image"
        ,
        image:{
          src:"./assets/brainglow3.png",
          replaceColor :true,
          fill:true
          
        },
        character: {
            value: ["decentralized", "privacy", "protected", "number go up"], // the text to use as particles, any string is valid, for escaping unicode char use the `\uXXXX` syntax
            font: "Verdana", // the font to use to draw the text. If the font needs an external css or javascript like FontAwesome you should include all the necessary files on your own
            style: "",
            weight: "bold" // the css weight property, some fonts like font awesome have a specified weight, check the documentation if needed
        },
        polygon:{
          sides:5
        }
          

      }
      ,
      size: {
        value: 30,
        random: true,
        animation: {
        enable: true,
        speed: 2,
        minimumValue: 10,
        sync: false
      }
      },
    },
    
    detectRetina: true,
    
  }