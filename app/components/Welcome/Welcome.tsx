"use client";
import { useMediaQuery } from "react-responsive";
import ParticleBackground from "../ParticleBackground/ParticleBackground";
import { AiOutlineArrowDown } from 'react-icons/ai';
import "./Welcome.css";

const Welcome = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1099px)" });
  return (
    <section className="welcome">
      <ParticleBackground />
      <div className="flex flex-col text-text font-extralight text-center tracking-wide select-none space-y-6 p-6 desktop:p-0">
        <h1 className="text-5xl desktop:text-7xl">
          Hey! I&apos;m <span className="text-accent font-light">Brian
          Maleki</span>.
        </h1>
        <h2 className="text-4xl desktop:text-6xl">
          Welcome to my portfolio.
        </h2>
      </div>
      <div className="absolute opacity-90 cursor-pointer animate-[bounce_2s_ease-in-out_infinite] align-bottom mt-[500px] desktop:mt-[800px]">
      <AiOutlineArrowDown size={!isMobileOrTablet ? 75 : 60} fill={"#d586ff"}/>
      </div>
    </section>
  );
};

export default Welcome;
