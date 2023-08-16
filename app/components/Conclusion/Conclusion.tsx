import Image from "next/image";
import "./Conclusion.css";
import { BiLogoGithub } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";

const Conclusion = () => {
  return (
    <section className="conclusion">
      <div className="flex space-x-8 items-center">
        <div className="border-primary/25 border-t w-[750px]"></div>
      </div>
      <div className="my-28 flex flex-col items-center space-y-12">
        <div className="text-text text-center font-light space-y-6">
          <p className="text-6xl text-accent">Get In Touch</p>
          <p className="text-lg">
            Whether you have general inquiries or would like to work with me, I&apos;ll be happy to <br></br> get back to you as soon as possible! I&apos;m always looking for new opportunities.
          </p>
        </div>
        <a href="mailto:brian@maleki.dev">
          <button className="allsides-4 text-text text-center font-semibold tracking-wide text-xl uppercase border-2 border-primary hover:bg-primary hover:text-background duration-700  transition-all rounded-lg w-[180px] h-[55px]">
            Mail me
          </button>
        </a>
        <div className="flex space-x-8">
          <a href="https://github.com/Hyporos" target="_blank">
            <BiLogoGithub
              size={40}
              className="fill-primary hover:fill-accent opacity-50 hover:opacity-100 transition-all duration-300"
            />
          </a>
          <a href="https://www.linkedin.com/in/brian-maleki/" target="_blank">
            <AiFillLinkedin
              size={40}
              className="fill-primary hover:fill-accent opacity-50 hover:opacity-100 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
