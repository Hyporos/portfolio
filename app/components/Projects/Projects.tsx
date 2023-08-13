import { LuExternalLink } from "react-icons/lu";
import Image from "next/image";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <div className="flex space-x-8 items-center">
        <div className="border-primary/25 border-t w-[750px]"></div>
        <h1 className="text-primary text-4xl uppercase font-light tracking-wider">
          PROJECTS
        </h1>
      </div>
      <div className="flex space-x-12 mt-36 mb-20 items-center">
        <div className="w-[500px] h-[350px] bg-primary/5 flex flex-col p-8 justify-between rounded-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-primary text-2xl uppercase tracking-wider hover:text-accent transition-all duration-300">
              <a href="https://maplesymbols.com/" target="_blank">
                Maple Symbols
              </a>
            </h2>
            <div className="flex space-x-8">
              <Image
                src="/badges/GitHub.webp"
                alt="GitHub"
                draggable="false"
                width={27}
                height={27}
              ></Image>
              <a href="https://maplesymbols.com/" target="_blank">
                <LuExternalLink
                  size={27}
                  className="stroke-[#bb86ff] hover:stroke-[#d586ff] transition-all duration-300"
                />
              </a>
            </div>
          </div>
          <div className="space-y-4 tracking-wide">
            <p className="text-text font-light">
              I developed a sleek, simple tool which serves as a calculator and
              information book for a system in a video game called Maplestory.
            </p>
            <p className="text-text font-light">
              The calculator has received overwhelmingly positive feedback and
              currently brings in about 7 unique visits a day.
            </p>
          </div>
          <div className="flex space-x-8 text-sm text-text/70 font-light">
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
        <div className="bg-primary/10 w-[350px] h-[350px] flex items-center justify-center rounded-lg">
          <div className="w-[330px] h-[330px] opacity-80 hover:w-[340px] hover:h-[340px] hover:opacity-100 transition-all duration-300 cursor-pointer">
            <Image
              src="/projects/maplesymbols.webp"
              className="rounded-lg"
              alt="Maple Symbols"
              draggable="false"
              width={350}
              height={350}
            ></Image>
          </div>
        </div>
      </div>
      <div className="flex space-x-12 mb-36 items-center">
        <div className="bg-primary/10 w-[350px] h-[350px] flex items-center justify-center rounded-lg">
          <div className="w-[330px] h-[330px] opacity-80 hover:w-[340px] hover:h-[340px] hover:opacity-100 transition-all duration-300 cursor-pointer">
            <Image
              src="/projects/wiremap.webp"
              className="rounded-lg"
              alt="Wiremap"
              draggable="false"
              width={350}
              height={350}
            />
          </div>
        </div>
        <div className="w-[500px] h-[350px] bg-primary/5 flex flex-col p-8 justify-between rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex space-x-8">
              <Image
                src="/badges/github.svg"
                alt="GitHub"
                draggable="false"
                width={27}
                height={27}
              />
              <a href="https://wirem.app/" target="_blank">
                <LuExternalLink
                  size={27}
                  className="stroke-[#bb86ff] hover:stroke-[#d586ff] transition-all duration-300 cursor-pointer"
                />
              </a>
            </div>
            <h2 className="text-primary text-2xl uppercase tracking-wider hover:text-accent transition-all duration-300">
              <a href="https://wirem.app/" target="_blank">
                Wiremap
              </a>
            </h2>
          </div>
          <div className="space-y-4 tracking-wide text-right">
            <p className="text-text font-light">
              Mainly designed in Figma, it is now being brought to life. I am
              helping design and develop this tool, which allows users to
              visualize and build sitemaps.
            </p>
            <p className="text-text font-light">
              What will make this visualizer stand out from the rest? No
              paywalls and a greatly improved user experience.
            </p>
          </div>
          <div className="flex space-x-8 text-sm text-text/70 text-center font-light justify-end">
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
              className="hover:text-white transition-all duration-300"
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
