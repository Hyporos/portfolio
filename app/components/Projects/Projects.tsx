import { LuExternalLink } from "react-icons/lu";
import Image from "next/image";
import "./Projects.css";
import { BiLogoGithub } from "react-icons/bi";

const Projects = () => {
  return (
    <section className="projects">
      <div className="flex space-x-8 items-center">
        <div className="border-primary/25 border-t w-[100px] desktop:w-[750px]"></div>
        <h1 className="text-primary text-3xl desktop:text-4xl uppercase font-light tracking-wider">
          PROJECTS
        </h1>
      </div>
      <div className="flex flex-col desktop:flex-row desktop:space-x-16 space-y-12 desktop:space-y-0 mt-16 desktop:mt-36 items-center">
        <div className="w-[350px] h-[350px] desktop:w-[500px] desktop:h-[350px] bg-primary/5 flex flex-col px-8 py-12 desktop:px-8 desktop:py-8 justify-between rounded-lg shadow-card shadow-black/0 transition-all hover:shadow-black/30 duration-300">
          <div className="flex justify-between items-center">
            <h2 className="text-primary text-2xl uppercase tracking-wider hover:text-accent transition-all duration-300">
              <a href="https://maplesymbols.com/" target="_blank" className="group">
                Maple Symbols
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accent"></span>
              </a>
            </h2>
            <div className="flex desktop:space-x-8">
              <a href="https://maplesymbols.com/" target="_blank" className="hidden desktop:block">
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
              I developed a sleek, simple tool which serves as a calculator and
              information book for a system in a video game called Maplestory.
            </p>
            <p className="text-text font-light hidden desktop:block">
              The calculator has received overwhelmingly positive feedback and
              currently brings in about 7 unique visits a day.
            </p>
          </div>
          <div className="flex space-x-4 desktop:space-x-8 text-sm text-text/70 font-light flex-wrap">
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
        <div className="bg-primary/10 w-[350px] h-[350px] items-center justify-center rounded-lg hidden desktop:flex">
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
      <div className="flex flex-col-reverse desktop:flex-row desktop:space-x-16 space-y-6 desktop:space-y-0 desktop:mt-16 mb-16 desktop:mb-32 items-center">
        <div className="bg-primary/10 w-[350px] h-[350px] items-center justify-center rounded-lg hidden desktop:flex">
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
        <div className="w-[350px] h-[350px] desktop:w-[500px] desktop:h-[350px] bg-primary/5 flex flex-col px-8 py-12 desktop:px-8 desktop:py-8 justify-between rounded-lg shadow-card shadow-black/0 transition-all hover:shadow-black/30 duration-300">
          <div className="flex justify-between items-center flex-row-reverse desktop:flex-row">
            <div className="flex space-x-8">
              <a href="https://wirem.app/" target="_blank" className="hidden desktop:block">
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
            <h2 className="text-primary text-2xl uppercase tracking-wider hover:text-accent transition-all duration-300">
              <a href="https://wirem.app/" target="_blank" className="group">
                Wiremap
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accent"></span>
              </a>
            </h2>
          </div>
          <div className="space-y-4 tracking-wide desktop:text-right">
            <p className="text-text font-light">
              Mainly designed in Figma, it is now being brought to life. I am
              helping design and develop this tool, which allows users to
              visualize and build sitemaps.
            </p>
            <p className="text-text font-light hidden desktop:block">
              What will make this visualizer stand out from the rest? No
              paywalls and a greatly improved user experience.
            </p>
          </div>
          <div className="flex space-x-4 desktop:space-x-8 text-sm text-text/70 font-light flex-wrap desktop:justify-end">
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
              NextJS
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
    </section>
  );
};

export default Projects;
