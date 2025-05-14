"use client";

import React, { useEffect, useState } from "react";

// Types
import type { Container } from "@tsparticles/engine";

// Imports
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

const ParticlesBG = () => {
  // States
  const [init, setInit] = useState(false);

  // Functions
  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };

  // Effects
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <Particles
        className="w-full h-full"
        id="particles-bg"
        particlesLoaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          detectRetina: true,
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: {
                enable: true,
                delay: 0.5,
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ff0000",
              animation: {
                h: {
                  enable: true,
                  speed: 20,
                  sync: true,
                },
              },
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              outModes: {
                default: "out",
              },
            },
            number: {
              density: {
                enable: true,
                width: 1920,
                height: 1080,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: {
                min: 1,
                max: 3,
              },
            },
            links: {
              color: {
                value: "#374151",
              },
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          zLayers: 100,
        }}
      />
    )
  );
};

export default ParticlesBG;
