import Image from "next/image";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects">
       <div className="flex space-x-8 items-center">
        <h1 className="text-primary text-4xl uppercase font-light tracking-wider">
          PROJECTS
        </h1>
        <div className="border-primary/25 border-t w-[1000px]"></div>
      </div>
      <div className="flex tracking-wide flex-col space-y-4 justify-center items-center rounded-3xl w-[900px] h-[400px]">
    <h2 className="text-text text-center text-xl font-light">Wiremap</h2>
    <h2 className="text-text text-center text-xl font-light">Maple Symbols</h2>
      </div>
    </section>
  );
};

export default Projects;
