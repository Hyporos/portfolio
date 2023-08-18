import ParticleBackground from "../ParticleBackground/ParticleBackground";
import { AiOutlineArrowDown } from 'react-icons/ai';
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome">
      <ParticleBackground />
      <div className="flex p-6 desktop:p-0 flex-col text-center space-y-6 text-text font-extralight tracking-wide select-none">
        <h1 className="text-5xl desktop:text-7xl">
          Hey! I&apos;m <span className="text-accent font-light">Brian
          Maleki</span>.
        </h1>
        <h2 className="text-4xl desktop:text-6xl">
          Welcome to my portfolio.
        </h2>
      </div>
      <div className="absolute align-bottom mt-[500px] desktop:mt-[800px] animate-[bounce_2s_ease-in-out_infinite] opacity-90 cursor-pointer">
      <AiOutlineArrowDown size={75} fill={"#d586ff"} className="hidden desktop:block"/>
      <AiOutlineArrowDown size={60} fill={"#d586ff"} className="block desktop:hidden"/>
      </div>
    </section>
  );
};

export default Welcome;
