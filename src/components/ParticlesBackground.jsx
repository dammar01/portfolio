import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#6b7ff2",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.2,
          random: false,
        },
        size: {
          value: 2.5,
          random: true,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "top",
          random: false,
          straight: false,
          outModes: {
            default: "out",
          },
          bounce: false,
        },
        shadow: {
          enable: true,
          color: {
            value: "#6b7ff2",
          },
          blur: 10,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "repulse",
          },
          onclick: {
            enable: false,
            mode: "push",
          },
          resize: false,
        },
      },
      retina_detect: true,
    }),
    []
  );
  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
};

export default ParticlesBackground;
