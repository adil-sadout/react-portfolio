import Particles from "react-tsparticles";
import {config1} from "./config1"
import {config2} from "./config2"
import {config3} from "./config3"
import {config4} from "./config4"
import {config5} from "./config5"
import {config6} from "./config6"
function ParticlesBack() {

    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };
    
    const particlesLoaded = (container) => {
        console.log(container);
    };


  return (
    
        <Particles id="tsparticles" options={config2} init={particlesInit} loaded={particlesLoaded} />
    
  )
}

export default ParticlesBack