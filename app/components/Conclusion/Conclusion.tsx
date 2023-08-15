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
            I&apos;m open to any new opportunities, so I&apos;d be happy to get
            back to you! <br></br>
          </p>
        </div>
        <button className="text-text text-center font-semibold tracking-wide text-xl uppercase border-2 border-primary hover:bg-primary hover:text-background duration-700  transition-all rounded-lg w-[180px] h-[55px]">
          Mail me
        </button>
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
