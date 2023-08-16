"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: "#141016",
        },
        fullScreen: {
          zIndex: -1,
        },
        fpsLimit: 120,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
        },
        particles: {
          color: {
            value: "#f1f1f1",
          },
          number: {
            density: {
              enable: true,
              area: 1080,
            },
            limit: 0,
            value: 500,
          },
          move: {
            enable: true,
            speed: 0.25,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.5,
              speed: 1.5,
              sync: false,
            },
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: {
              enable: true,
              minimumValue: 0.75,
            },
            value: 1.5,
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
