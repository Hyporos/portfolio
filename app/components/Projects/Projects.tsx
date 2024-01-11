"use client";
import { LuExternalLink } from "react-icons/lu";
import Image from "next/image";
import { BiLogoGithub } from "react-icons/bi";
import useOnScreen from "@/app/hooks/isOnScreen";
import { useRef } from "react";
import "./Projects.css";

const Projects = () => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const isOnScreen = useOnScreen(observerRef);

  return (
    <section ref={observerRef} className="projects">
      <div className="flex space-x-8 items-center">
        <div
          className={`border-primary/25 border-t transition-all duration-[2500ms] ${
            isOnScreen
              ? "w-[130px] tablet:w-[490px] desktop:w-[835px]"
              : "w-[0px]"
          }`}
        ></div>
        <h1
          className={`transition-all duration-[2500ms] text-accent text-3xl desktop:text-4xl uppercase font-light tracking-wider ${
            !isOnScreen && "opacity-0"
          }`}
        >
          PROJECTS
        </h1>
      </div>
      <div className="flex flex-col tablet:flex-row desktop:flex-col flex-wrap desktop:flex-nowrap justify-center tablet:mt-6 mt-0 desktop:mt-0 max-w-[700px] desktop:max-w-[1000px]">
        <div className="flex flex-col desktop:flex-row desktop:space-x-16 space-y-12 desktop:space-y-0 mt-16 tablet:mt-6 desktop:mt-36 items-center mr-0 tablet:mr-8 desktop:mr-0 tablet:mb-8 desktop:mb-0">
          <div
            className={`transition-all duration-[2500ms] ${
              isOnScreen
                ? "translate-x-[0px] opacity-100"
                : "opacity-0 translate-x-[-100px]"
            }`}
          >
            <div className="w-[330px] h-[350px] desktop:w-[500px] desktop:h-[350px] bg-primary/5 flex flex-col px-8 py-12 desktop:px-8 desktop:py-8 justify-between rounded-lg shadow-card shadow-black/0 transition-all hover:shadow-black/30 duration-500">
              <div className="flex justify-between items-center">
                <h2 className="text-primary text-2xl uppercase tracking-wider hover:text-accent transition-all duration-300">
                  <a
                    href="https://maplesymbols.com/"
                    target="_blank"
                    className="group"
                  >
                    Maple Symbols
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accent"></span>
                  </a>
                </h2>
                <div className="flex desktop:space-x-8">
                  <a
                    href="https://maplesymbols.com/"
                    target="_blank"
                    className="hidden desktop:block"
                  >
                    <LuExternalLink
                      size={27}
                      className="stroke-[#bb86ff] hover:stroke-[#d586ff] transition-all duration-300 opacity-50 hover:opacity-100"
                    />
                  </a>
                  <a
                    href="https://github.com/Hyporos/maple-symbols"
                    target="_blank"
                  >
                    <BiLogoGithub
                      size={30}
                      className="fill-primary hover:fill-accent transition-all duration-300 opacity-50 hover:opacity-100"
                    />
                  </a>
                </div>
              </div>
              <div className="space-y-4 tracking-wide">
                <p className="text-text font-light">
                  I developed a sleek, simple tool which serves as a calculator
                  and information book for a system in MapleStory, a video game.
                </p>
                <p className="text-text font-light hidden desktop:block">
                  The calculator has received overwhelmingly positive feedback
                  and currently brings in about 12 unique visits a day.
                </p>
              </div>
              <div className="flex space-x-3 desktop:space-x-8 text-sm text-text/70 font-light flex-wrap">
                <a
                  className="hover:text-white transition-all duration-300"
                  href="https://react.dev/"
                  target="_blank"
                >
                  React
                </a>
                <a
                  className="hover:text-white transition-all duration-300"
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                >
                  TypeScript
                </a>
                <a
                  className="hover:text-white transition-all duration-300"
                  href="https://tailwindcss.com/"
                  target="_blank"
                >
                  Tailwind
                </a>
                <a
                  className="hover:text-white transition-all duration-300"
                  href="https://firebase.google.com/"
                  target="_blank"
                >
                  Firebase
                </a>
              </div>
            </div>
          </div>
          <div
            className={`bg-primary/10 w-[350px] h-[350px] items-center justify-center rounded-lg hidden desktop:flex transition-all duration-[2500ms] ${
              isOnScreen
                ? "translate-y-[0px] opacity-100"
                : "opacity-0 translate-y-[-100px]"
            }`}
          >
            <div className="w-[330px] h-[330px] opacity-75 hover:w-[340px] hover:h-[340px] hover:opacity-100 transition-all duration-300 cursor-pointer">
              <a href="https://maplesymbols.com/" target="_blank">
                <Image
                  src="/projects/maplesymbols.webp"
                  className="rounded-lg"
                  alt="Maple Symbols"
                  draggable="false"
                  width={350}
                  height={350}
                ></Image>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse desktop:flex-row desktop:space-x-16 my-8 tablet:my-0 desktop:space-y-0 desktop:mt-16 items-center tablet:mb-8 desktop:mb-0">
          <div
            className={`bg-primary/10 w-[350px] h-[350px] items-center justify-center rounded-lg hidden desktop:flex transition-all duration-[2500ms] ${
              isOnScreen
                ? "translate-y-[0px] opacity-100"
                : "opacity-0 translate-y-[100px]"
            }`}
          >
            <div className="w-[330px] h-[330px] opacity-75 hover:w-[340px] hover:h-[340px] hover:opacity-100 transition-all duration-300 cursor-pointer">
              <a href="https://github.com/Hyporos/saku" target="_blank">
                <Image
                  src="/projects/saku.webp"
                  className="rounded-lg"
                  alt="Wiremap"
                  draggable="false"
                  width={350}
                  height={350}
                />
              </a>
            </div>
          </div>
          <div
            className={`transition-all duration-[2500ms] ${
              isOnScreen
                ? "translate-x-[0px] opacity-100"
                : "opacity-0 translate-x-[100px]"
            }`}
          >
            <div className="w-[330px] h-[350px] desktop:w-[500px] desktop:h-[350px] bg-primary/5 flex flex-col px-8 py-12 desktop:px-8 desktop:py-8 justify-between rounded-lg shadow-card shadow-black/0 transition-all hover:shadow-black/30 duration-500">
              <div className="flex justify-between items-center flex-row-reverse desktop:flex-row">
                <div className="flex space-x-8">
                  <a href="https://github.com/Hyporos/saku" target="_blank">
                    <BiLogoGithub
                      size={30}
                      className="fill-primary hover:fill-accent transition-all duration-300 opacity-50 hover:opacity-100"
                    />
                  </a>
                </div>
                <h2 className="text-primary text-2xl uppercase tracking-wider hover:text-accent transition-all duration-300">
                  <a
                    href="https://github.com/Hyporos/saku"
                    target="_blank"
                    className="group"
                  >
                    Saku
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accent"></span>
                  </a>
                </h2>
              </div>
              <div className="space-y-4 tracking-wide desktop:text-right">
                <p className="text-text font-light">
                  A Discord bot specifically tailored for a thriving MapleStory
                  community of over 400 members.
                </p>
                <p className="text-text font-light hidden desktop:block">
                  The bot is used by many as an essential tool. It'll allow you
                  to track and analyze many different groups of data, according
                  to your needs.
                </p>
              </div>
              <div className="flex space-x-3 desktop:space-x-8 text-sm text-text/70 font-light flex-wrap desktop:justify-end">
                <a
                  className="hover:text-white transition-all duration-300"
                  href="https://react.dev/"
                  target="_blank"
                >
                  JavaScript
                </a>
                <a
                  className="hover:text-white transition-all duration-300"
                  href="https://nodejs.org/en"
                  target="_blank"
                >
                  Node.js
                </a>
                <a
                  className="hover:text-white transition-all duration-300"
                  href="https://discord.js.org/"
                  target="_blank"
                >
                  Discord.js
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse desktop:flex-row desktop:space-x-16 space-y-6 desktop:space-y-0 desktop:mt-16 mb-16 desktop:mb-32 items-center">
          <div
            className={`transition-all duration-[2500ms] ${
              isOnScreen
                ? "translate-y-[0px] translate-x-[0px] opacity-100"
                : "opacity-0 translate-x-[-100px] tablet:translate-y-[100px] tablet:translate-x-[0px] desktop:translate-x-[100px]"
            }`}
          >
            <div className="w-[330px] h-[350px] desktop:w-[500px] desktop:h-[350px] bg-primary/5 flex flex-col px-8 py-12 desktop:px-8 desktop:py-8 justify-between rounded-lg shadow-card shadow-black/0 transition-all hover:shadow-black/30 duration-500">
              <div className="flex justify-between items-center desktop:flex-row">
                <h2 className="text-primary text-2xl uppercase tracking-wider hover:text-accent transition-all duration-300">
                  <a
                    href="https://wirem.app/"
                    target="_blank"
                    className="group"
                  >
                    Wiremap
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accent"></span>
                  </a>
                </h2>
                <div className="flex space-x-8">
                  <a
                    href="https://wirem.app/"
                    target="_blank"
                    className="hidden desktop:block"
                  >
                    <LuExternalLink
                      size={27}
                      className="stroke-[#bb86ff] hover:stroke-[#d586ff] transition-all duration-300 opacity-50 hover:opacity-100"
                    />
                  </a>
                  <a href="https://github.com/wiremapp/app" target="_blank">
                    <BiLogoGithub
                      size={30}
                      className="fill-primary hover:fill-accent transition-all duration-300 opacity-50 hover:opacity-100"
                    />
                  </a>
                </div>
              </div>
              <div className="space-y-4 tracking-wide">
                <p className="text-text font-light">
                  Initially designed in Figma, it's now being brought to life.
                  I'm helping design and develop this tool, which allows users
                  to visualize and build sitemaps.
                </p>
                <p className="text-text font-light hidden desktop:block">
                  What will make this visualizer stand out from the rest? No
                  paywalls and a greatly improved user experience.
                </p>
              </div>
              <div className="flex space-x-3 desktop:space-x-8 text-sm text-text/70 font-light flex-wrap">
                <a
                  className="hover:text-white transition-all duration-300"
                  href="https://react.dev/"
                  target="_blank"
                >
                  React
                </a>
                <a
                  className="hover:text-white transition-all duration-300"
                  href="https://nextjs.org/"
                  target="_blank"
                >
                  Next.js
                </a>
                <a
                  className="hover:text-white transition-all duration-300"
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                >
                  TypeScript
                </a>
                <a
                  className="hover:text-white transition-all duration-300"
                  href="https://tailwindcss.com/"
                  target="_blank"
                >
                  Tailwind
                </a>
                <a
                  className="hover:text-white transition-all duration-300 hidden desktop:block"
                  href="https://www.netlify.com/"
                  target="_blank"
                >
                  Netlify
                </a>
              </div>
            </div>
          </div>
          <div
            className={`bg-primary/10 w-[350px] h-[350px] items-center justify-center rounded-lg hidden desktop:flex transition-all duration-[2500ms] ${
              isOnScreen
                ? "translate-y-[0px] opacity-100"
                : "opacity-0 translate-y-[100px]"
            }`}
          >
            <div className="w-[330px] h-[330px] opacity-75 hover:w-[340px] hover:h-[340px] hover:opacity-100 transition-all duration-300 cursor-pointer">
              <a href="https://wirem.app/" target="_blank">
                <Image
                  src="/projects/wiremap.webp"
                  className="rounded-lg"
                  alt="Wiremap"
                  draggable="false"
                  width={350}
                  height={350}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
