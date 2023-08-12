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
        <div className="bg-primary/10 w-[350px] h-[350px] flex items-center justify-center rounded-lg">
          <div className="w-[325px] h-[325px]">
            <Image
              src="/projects/maplesymbols.webp"
              alt="Maple Symbols"
              draggable="false"
              width={350}
              height={350}
            ></Image>
          </div>
        </div>
        <div className="w-[500px] h-[350px] bg-primary/5 flex flex-col p-8 justify-between rounded-lg">
          <div className="flex justify-between  items-center">
            <h2 className="text-accent text-left text-2xl uppercase tracking-wider">
              Maple Symbols
            </h2>
            <div className="flex space-x-8">
              <Image
                src="/badges/GitHub.webp"
                alt="GitHub"
                draggable="false"
                width={27}
                height={27}
              ></Image>
              <Image
                src="/badges/GitHub.webp"
                alt="GitHub"
                draggable="false"
                width={27}
                height={27}
              ></Image>
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
          <div className="flex space-x-8 text-sm text-text/70 text-center font-light">
            <p>React</p>
            <p>TypeScript</p>
            <p>Tailwind</p>
            <p>Firebase</p>
          </div>
        </div>
      </div>
      <div className="flex space-x-12 mb-36 items-center">
        <div className="w-[500px] h-[350px] bg-primary/5 flex flex-col p-8 justify-between rounded-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-accent text-right text-2xl uppercase tracking-wider">
              Wiremap
            </h2>
            <div className="flex space-x-8">
              <Image
                src="/badges/GitHub.webp"
                alt="GitHub"
                draggable="false"
                width={27}
                height={27}
              ></Image>
              <Image
                src="/badges/GitHub.webp"
                alt="GitHub"
                draggable="false"
                width={27}
                height={27}
              ></Image>
            </div>
          </div>
          <div className="space-y-4 tracking-wide">
            <p className="text-text font-light">
              Mainly designed in Figma, it is now being brought to life. I am helping design and
              develop this tool, which allows users to visualize and build
              sitemaps.
            </p>
            <p className="text-text font-light">What will make this visualizer stand out from the rest? No paywalls and a greatly improved user experience.</p>
          </div>
          <div className="flex space-x-8 text-sm text-text/70 text-center font-light">
            <p>React</p>
            <p>NextJS</p>
            <p>TypeScript</p>
            <p>Tailwind</p>
            <p>Vercel</p>
          </div>
        </div>
        <div className="bg-primary/10 w-[350px] h-[350px] flex items-center justify-center rounded-lg">
          <div className="w-[325px] h-[325px]">
            <Image
              src="/projects/wiremap.webp"
              alt="Wiremap"
              draggable="false"
              width={350}
              height={350}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
