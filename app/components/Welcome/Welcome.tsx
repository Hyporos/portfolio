"use client";
import ParticleBackground from "../ParticleBackground/ParticleBackground";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./Welcome.css";
import { useRef } from "react";
import useOnScreen from "@/app/hooks/isOnScreen";

const Welcome = () => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const isOnScreen = useOnScreen(observerRef);

  return (
    <section ref={observerRef} className="welcome">
      <ParticleBackground />
      <div
        className={`flex flex-col text-text font-extralight text-center tracking-wide select-none transition-all duration-[2500ms] space-y-6 p-6 desktop:p-0 ${
          isOnScreen
            ? "translate-y-[0px] opacity-100"
            : "translate-y-[-300px] opacity-0"
        }`}
      >
        <h1 className="text-5xl tablet:text-6xl desktop:text-7xl">
          Hey! I&apos;m{" "}
          <span className="text-accent font-light">Brian Maleki</span>.
        </h1>
        <h2 className="text-4xl tablet:text-5xl desktop:text-6xl">
          Welcome to my portfolio.
        </h2>
        <div
          className={`transition-all delay-[2000ms] duration-[2500ms] ${
            isOnScreen
              ? "translate-y-[0px] desktop:translate-x-[0px] opacity-100"
              : "translate-y-[50px] desktop:translate-y-[0px] desktop:translate-x-[100px] opacity-0"
          }`}
        >
          <a href="https://raw.githubusercontent.com/Hyporos/portfolio/master/public/resume.png" target="_blank">
            <button className="allsides-4 mt-6 desktop:mt-8 text-text text-center font-semibold tracking-wide text-base desktop:text-xl uppercase border-2 border-primary hover:bg-primary hover:text-background duration-700 transition-all rounded-lg w-[125px] h-[45px] tablet:w-[140px] desktop:w-[180px] tablet:h-[50px] desktop:h-[55px]">
              Resume
            </button>
          </a>
        </div>
      </div>
      <div
        className={`absolute cursor-pointer animate-[bounce_2s_ease-in-out_infinite] align-bottom mt-[550px] duration-[5000ms] desktop:mt-[800px] ${
          isOnScreen ? "opacity-90" : "opacity-0"
        }`}
      >
        <AiOutlineArrowDown
          className="w-[60px] tablet:w-[75px] h-[60px] tablet:h-[75px]"
          fill={"#d586ff"}
        />
      </div>
    </section>
  );
};

export default Welcome;
