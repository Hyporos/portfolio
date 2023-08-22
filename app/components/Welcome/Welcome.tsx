"use client";
import { useMediaQuery } from "react-responsive";
import ParticleBackground from "../ParticleBackground/ParticleBackground";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./Welcome.css";
import { MutableRefObject, useEffect, useRef } from "react";
import useOnScreen from "@/app/hooks/isOnScreen";

const Welcome = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 749px)" });
  const observerRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(observerRef);

  return (
    <section ref={observerRef} className="welcome">
      <ParticleBackground />
      <div className={`flex flex-col text-text font-extralight text-center tracking-wide select-none transition-all duration-[2500ms] space-y-6 p-6 desktop:p-0 ${isOnScreen ? "translate-y-[0px] opacity-100" : "translate-y-[-300px] opacity-0"}`}>
        <h1
          className="text-5xl tablet:text-6xl desktop:text-7xl"
        >
          Hey! I&apos;m{" "}
          <span className="text-accent font-light">Brian Maleki</span>.
        </h1>
        <h2 className="text-4xl tablet:text-5xl desktop:text-6xl">
          Welcome to my portfolio.
        </h2>
      </div>
      <div className={`absolute cursor-pointer animate-[bounce_2s_ease-in-out_infinite] align-bottom mt-[500px] duration-[5000ms] desktop:mt-[800px] ${isOnScreen ? "opacity-90" : "opacity-0"}`}>
        <AiOutlineArrowDown size={!isMobile ? 75 : 60} fill={"#d586ff"} />
      </div>
    </section>
  );
};

export default Welcome;
