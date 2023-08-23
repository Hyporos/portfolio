"use client";
import "./Conclusion.css";
import { BiLogoGithub } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import useOnScreen from "@/app/hooks/isOnScreen";
import { useRef } from "react";

const Conclusion = () => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const isOnScreen = useOnScreen(observerRef);
  return (
    <section ref={observerRef} className="conclusion">
      <div className="flex space-x-8 items-center">
        <div
          className={`border-primary/25 border-t transition-all duration-[2500ms] ${
            isOnScreen
              ? "w-[335px] tablet:w-[690px] desktop:w-[1060px]"
              : "w-[0px]"
          }`}
        ></div>
      </div>
      <div className="my-16 desktop:my-28 flex flex-col items-center space-y-6 desktop:space-y-12">
        <div className="text-text text-center font-light space-y-6">
          <p
            className={`text-4xl desktop:text-6xl text-accent transition-all duration-[2500ms] ${
              isOnScreen
                ? "translate-y-[0px] opacity-100"
                : "translate-y-[-50px] desktop:translate-y-[-100px] opacity-0"
            }`}
          >
            Get In Touch
          </p>
          <p
            className={`text-base tablet:text-lg desktop:text-lg w-[375px] p-6 desktop:p-0 tablet:w-[650px] desktop:w-full transition-all duration-[2500ms] ${
              isOnScreen
                ? "translate-x-[0px] opacity-100"
                : "translate-x-[-100px] opacity-0"
            }`}
          >
            Whether you have general inquiries or would like to work with me,{" "}
            <span className="hidden tablet:block"></span>
            I&apos;ll be happy to get back to you as soon as possible! I&apos;m
            always looking for new opportunities.
          </p>
        </div>
        <div className="flex space-x-8 desktop:space-x-0 items-center">
          <a
            href="https://github.com/Hyporos"
            target="_blank"
            className={`block desktop:hidden transition-all duration-[2500ms] ${
              isOnScreen ? "translate-y-[0px] translate-x-[0px] opacity-100" : "translate-y-[50px] translate-x-[-50px] opacity-0"
            }`}
          >
            <BiLogoGithub
              size={35}
              className="fill-primary hover:fill-accent opacity-50 hover:opacity-100 transition-all duration-300"
            />
          </a>
          <a
            href="mailto:brian@maleki.dev"
            className={`transition-all duration-[2500ms] ${
              isOnScreen
                ? "translate-y-[0px] desktop:translate-x-[0px] opacity-100"
                : "translate-y-[50px] desktop:translate-y-[0px] desktop:translate-x-[100px] opacity-0"
            }`}
          >
            <button className="allsides-4 text-text text-center font-semibold tracking-wide text-base desktop:text-xl uppercase border-2 border-primary hover:bg-primary hover:text-background duration-700  transition-all rounded-lg w-[125px] h-[45px] tablet:w-[140px] desktop:w-[180px] tablet:h-[50px] desktop:h-[55px]">
              Mail me
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/brian-maleki/"
            target="_blank"
            className={`block desktop:hidden transition-all duration-[2500ms] ${
              isOnScreen ? "translate-y-[0px] translate-x-[0px] opacity-100" : "translate-y-[50px] translate-x-[50px] opacity-0"
            }`}
          >
            <AiFillLinkedin
              size={35}
              className="fill-primary hover:fill-accent opacity-50 hover:opacity-100 transition-all duration-300"
            />
          </a>
        </div>
        <div className="flex space-x-8">
          <a
            href="https://github.com/Hyporos"
            target="_blank"
            className={`hidden desktop:block transition-all duration-[2500ms] ${
              isOnScreen
                ? "translate-y-[0px] opacity-100"
                : "translate-y-[50px] opacity-0"
            }`}
          >
            <BiLogoGithub
              size={40}
              className="fill-primary hover:fill-accent opacity-50 hover:opacity-100 transition-all duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/brian-maleki/"
            target="_blank"
            className={`hidden desktop:block transition-all duration-[2500ms] ${
              isOnScreen
                ? "translate-y-[0px] opacity-100"
                : "translate-y-[50px] opacity-0"
            }`}
          >
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
