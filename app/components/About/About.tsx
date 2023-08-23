"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import "./About.css";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoCPlusPlus,
  BiLogoMongodb,
  BiLogoGit,
  BiLogoFigma,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { PiFileSql } from "react-icons/pi";
import { SiExpress } from "react-icons/si";
import useOnScreen from "@/app/hooks/isOnScreen";

const About = () => {
  const [skills, setSkills] = useState(1);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const isOnScreen = useOnScreen(observerRef);
  return (
    <section ref={observerRef} className="about">
      <div className="flex space-x-8 items-center mt-36">
        <h1
          className={`text-accent text-3xl desktop:text-4xl uppercase font-light tracking-wider transition-all duration-[2500ms] ${
            !isOnScreen && "opacity-0"
          }`}
        >
          ABOUT
        </h1>
        <div
          className={`border-primary/25 border-t transition-all duration-[2500ms] ${
            isOnScreen
              ? "w-[170px] tablet:w-[540px] desktop:w-[900px]"
              : "w-[0px]"
          }`}
        ></div>
      </div>
      <div className="flex flex-col-reverse desktop:flex-row justify-center items-center desktop:space-x-16 mt-16 mb-12 desktop:my-36 desktop:max-h-[300px] w-[350px] tablet:w-[600px] desktop:max-w-[1000px]">
        <div className="flex flex-col justify-between items-center desktop:items-stretch">
          <div
            className={`text-text text-justify tablet:text-justify desktop:[text-align-last:justify] [text-align-last:center] text-lg desktop:text-xl font-light px-6 w-[350px] tablet:w-[600px] transition-all duration-[2500ms] desktop:w-full desktop:px-0 ${
              isOnScreen
                ? "translate-y-[0px] opacity-100"
                : "translate-y-[-100px] opacity-0"
            }`}
          >
            I&apos;m a web developer with a passion for design based in Toronto,
            Canada. Growing up, I was always around technology. As a result, I
            had been fascinated by the idea of creating new things. Fast forward
            to today, I now strive to develop tools that prove to be useful to
            others. When I&apos;m not occupied with coding, you can find me
            hiking, rock climbing, or studying a new language.
          </div>
          <div
            className={`border-primary/25 border-t w-[325px] tablet:w-[690px] desktop:w-[636px] my-12 desktop:my-6 transition-all duration-[2500ms] ${
              isOnScreen ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <div
            className={`transition-all duration-[2500ms] ${
              isOnScreen
                ? "translate-y-[0px] opacity-100"
                : "translate-y-[100px] opacity-0"
            }`}
          >
            <div className="flex desktop:w-full justify-between space-x-8 desktop:px-12 uppercase tracking-wide items-center mb-2 tablet:mb-0 transition-all duration-[2500ms]">
              <div className="tablet:w-full text-center tablet:text-left">
                <span
                  className={`group transition-all cursor-pointer basic-3 hover:text-accent border-accent hover:font-semibold duration-300 ${
                    skills === 1
                      ? "font-semibold text-accent basic-4"
                      : "font-light text-primary"
                  }`}
                  onClick={() => setSkills(1)}
                >
                  Front-end
                </span>
              </div>
              <div className="tablet:w-full text-center">
                <span
                  className={`transition-all cursor-pointer hover:text-accent basic-3 border-accent hover:font-semibold duration-300 ${
                    skills === 2
                      ? "font-semibold text-accent basic-4"
                      : "font-light text-primary"
                  }`}
                  onClick={() => setSkills(2)}
                >
                  Back-end
                </span>
              </div>
              <div className="tablet:w-full text-right">
                <span
                  className={`transition-all cursor-pointer basic-3 hover:text-accent border-accent hover:font-semibold duration-300 ${
                    skills === 3
                      ? "font-semibold text-accent basic-4"
                      : "font-light text-primary"
                  }`}
                  onClick={() => setSkills(3)}
                >
                  Other
                </span>
              </div>
            </div>
            <div
              className={`flex justify-around tablet:w-[600px] desktop:w-full space-x-2 desktop:space-x-0 mt-6 ${
                skills === 1 ? "flex" : "hidden"
              }`}
            >
              <a href="https://html.spec.whatwg.org/" target="_blank">
                <BiLogoHtml5 size={40} className="skill-icon" />
              </a>
              <a
                href="https://www.w3.org/Style/CSS/Overview.en.html"
                target="_blank"
              >
                <BiLogoCss3 size={40} className="skill-icon" />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
              >
                <BiLogoJavascript size={40} className="skill-icon" />
              </a>
              <a href="https://www.typescriptlang.org/" target="_blank">
                <BiLogoTypescript size={40} className="skill-icon" />
              </a>
              <a href="https://react.dev/" target="_blank">
                <BiLogoReact size={40} className="skill-icon" />
              </a>
              <a href="https://nextjs.org/" target="_blank">
                <TbBrandNextjs size={40} className="skill-icon" />
              </a>
              <a href="https://tailwindcss.com/" target="_blank">
                <BiLogoTailwindCss size={40} className="skill-icon" />
              </a>
            </div>
            <div
              className={`flex justify-around tablet:w-[600px] desktop:w-full space-x-10 desktop:space-x-3.5 mt-6 ${
                skills === 2 ? "flex" : "hidden"
              }`}
            >
              <a href="https://cplusplus.com/" target="_blank">
                <BiLogoCPlusPlus size={40} className="skill-icon" />
              </a>
              <a href="https://en.wikipedia.org/wiki/SQL" target="_blank">
                <PiFileSql size={40} className="skill-icon" />
              </a>
              <a href="https://expressjs.com/" target="_blank">
                <SiExpress size={40} className="skill-icon" />
              </a>
            </div>
            <div
              className={`flex justify-around tablet:w-[600px] desktop:w-full space-x-10 desktop:space-x-3.5 mt-6 ${
                skills === 3 ? "flex" : "hidden"
              }`}
            >
              <a href="https://git-scm.com/" target="_blank">
                <BiLogoGit size={40} className="skill-icon" />
              </a>
              <a href="https://www.mongodb.com/" target="_blank">
                <BiLogoMongodb size={40} className="skill-icon" />
              </a>
              <a href="https://www.figma.com/" target="_blank">
                <BiLogoFigma size={40} className="skill-icon" />
              </a>
            </div>
          </div>
        </div>
        <Image
          src="/portrait.webp"
          className={`rounded-2xl shadow-card mb-12 desktop:mb-0 shadow-black/0 transition-all hover:shadow-black/30 duration-[2500ms] hover:duration-500 ${
            isOnScreen
              ? "translate-x-[0px] opacity-100"
              : "translate-x-[100px] opacity-0"
          }`}
          alt="Portrait"
          draggable="false"
          width={300}
          height={300}
        ></Image>
      </div>
    </section>
  );
};

export default About;
