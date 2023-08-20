"use client";
import { useState } from "react";
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
import { PiFileSql } from "react-icons/pi"
import { SiExpress } from "react-icons/si"

const About = () => {
  const [skills, setSkills] = useState(1);
  return (
    <section className="about">
      <div className="flex space-x-8 items-center mt-36">
        <h1 className="text-primary text-3xl desktop:text-4xl uppercase font-light tracking-wider">
          ABOUT
        </h1>
        <div className="border-primary/25 border-t w-[170px] desktop:w-[900px]"></div>
      </div>
      <div className="flex flex-col-reverse desktop:flex-row justify-center items-center desktop:space-x-16 my-16 desktop:my-36 desktop:max-h-[300px] w-[350px] desktop:max-w-[1000px]">
        <div className="flex flex-col justify-between items-center desktop:items-stretch">
          <p className="text-text text-center desktop:text-justify desktop:[text-align-last:justify] text-lg desktop:text-xl font-light px-6 w-[350px] desktop:w-full desktop:px-0">
            I&apos;m a web developer with a passion for design based in Toronto,
            Canada. Growing up, I was always around technology. As a result, I
            had been fascinated by the idea of creating new things. Fast forward
            to today, I now strive to develop tools that prove to be useful to
            others. When I&apos;m not occupied with coding, you can find me
            hiking, rock climbing, or studying a new language.
          </p>
          <div className="border-primary/25 border-t w-[335px] desktop:w-[636px] my-12 desktop:my-6"></div>
          <div className="flex space-x-8 desktop:px-12 uppercase tracking-wide items-center">
            <div className="desktop:w-full text-center desktop:text-left">
              <span
                className={`group transition-all cursor-pointer basic-3 hover:text-accent border-accent hover:font-semibold duration-300 ${
                  skills === 1 ? "font-semibold text-accent basic-4" : "font-light text-primary"
                }`}
                onClick={() => setSkills(1)}
              >
                Front-end
              </span>
            </div>
            <div className="desktop:w-full text-center">
              <span
                className={`transition-all cursor-pointer hover:text-accent basic-3 border-accent hover:font-semibold duration-300 ${
                  skills === 2 ? "font-semibold text-accent basic-4" : "font-light text-primary"
                }`}
                onClick={() => setSkills(2)}
              >
                 Back-end
              </span>
            </div>
            <div className="desktop:w-full text-right">
              <span
                className={`transition-all cursor-pointer basic-3 hover:text-accent border-accent hover:font-semibold duration-300 ${
                  skills === 3 ? "font-semibold text-accent basic-4" : "font-light text-primary"
                }`}
                onClick={() => setSkills(3)}
              >
                Other
              </span>
            </div>
          </div>
          <div className={`flex justify-around space-x-2 desktop:space-x-0 mt-6 ${skills === 1 ? "flex" : "hidden"}`}>
            <a href="https://html.spec.whatwg.org/" target="_blank">
              <BiLogoHtml5
                size={40}
                className="skill-icon"
              />
            </a>
            <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
              <BiLogoCss3
                size={40}
                className="skill-icon"
              />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
              <BiLogoJavascript
                size={40}
                className="skill-icon"
              />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank">
              <BiLogoTypescript
                size={40}
                className="skill-icon"
              />
            </a>
            <a href="https://react.dev/" target="_blank">
              <BiLogoReact
                size={40}
                className="skill-icon"
              />
            </a>
            <a href="https://nextjs.org/" target="_blank">
              <TbBrandNextjs
                size={40}
                className="skill-icon"
              />
            </a>
            <a href="https://tailwindcss.com/" target="_blank">
              <BiLogoTailwindCss
                size={40}
                className="skill-icon"
              />
            </a>
          </div>
          <div className={`flex justify-around space-x-10 desktop:space-x-3.5 mt-6 ${skills === 2 ? "flex" : "hidden"}`}>
          <a href="https://cplusplus.com/" target="_blank">
              <BiLogoCPlusPlus
                size={40}
                className="skill-icon"
              />
            </a>
            <a href="https://en.wikipedia.org/wiki/SQL" target="_blank">
              <PiFileSql
                size={40}
                className="skill-icon"
              />
            </a>
            <a href="https://expressjs.com/" target="_blank">
              <SiExpress
                size={40}
                className="skill-icon"
              />
            </a>
          </div>
          <div className={`flex justify-around space-x-10 desktop:space-x-3.5 mt-6 ${skills === 3 ? "flex" : "hidden"}`}>
          <a href="https://git-scm.com/" target="_blank">
              <BiLogoGit
                size={40}
                className="skill-icon"
              />
            </a>
            <a href="https://www.mongodb.com/" target="_blank">
              <BiLogoMongodb
                size={40}
                className="skill-icon"
              />
            </a>
            <a href="https://www.figma.com/" target="_blank">
              <BiLogoFigma
                size={40}
                className="skill-icon"
              />
            </a>
          </div>
        </div>
        <Image
          src="/portrait.webp"
          className="rounded-2xl shadow-card mb-12 desktop:mb-0 shadow-black/0 transition-all hover:shadow-black/30 duration-300"
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
