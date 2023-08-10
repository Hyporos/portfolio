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
      <div className="my-32">
        <div>
          <h2 className="text-text text-center text-xl font-light">Wiremap</h2>
          <Image
            src="/projects/wiremap.webp"
            className="opacity-75 hover:opacity-100 transition-all"
            alt="Wiremap"
            draggable="false"
            width={320}
            height={160}
          ></Image>
        </div>

        <h2 className="text-text text-center text-xl font-light">
          Maple Symbols
        </h2>
      </div>
    </section>
  );
};

export default Projects;
