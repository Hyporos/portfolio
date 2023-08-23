"use client";
import { useRef } from "react";
import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs, TbBrandVercel } from "react-icons/tb";
import useOnScreen from "@/app/hooks/isOnScreen";
import "./Footer.css";

const Footer = () => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const isOnScreen = useOnScreen(observerRef);
  return (
    <section ref={observerRef} className="footer">
      <div className="flex flex-col items-center space-y-4 desktop:space-y-6">
        <p
          className={`text-text text-center text-lg desktop:text-xl transition-all duration-[2500ms] ${
            isOnScreen
              ? "translate-y-[0px] opacity-100"
              : "translate-y-[-20px] opacity-0"
          }`}
        >
          Built with
        </p>
        <div
          className={`flex space-x-3 desktop:space-x-4 transition-all duration-[2500ms] ${
            !isOnScreen && "opacity-0"
          }`}
        >
          <a href="https://react.dev/" target="_blank">
            <BiLogoReact className="w-[35px] tablet:w-[40px] h-[35px] tablet:h-[40px] logo-icon fill-primary hover:fill-accent" />
          </a>
          <a href="https://nextjs.org/" target="_blank">
            <TbBrandNextjs className="w-[35px] tablet:w-[40px] h-[40px] tablet:h-[40px] logo-icon stroke-primary hover:stroke-accent" />
          </a>
          <a href="https://vercel.com/" target="_blank">
            <TbBrandVercel className="w-[35px] tablet:w-[40px] h-[35px] tablet:h-[40px] logo-icon stroke-primary hover:stroke-accent" />
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <BiLogoTailwindCss className="w-[35px] tablet:w-[40px] h-[35px] tablet:h-[40px] logo-icon fill-primary hover:fill-accent" />
          </a>
        </div>
        {/* Very odd bug? There must be 'text' or another value after the translate and color/opacity for the second value to work.*/}
        <p
          className={`text-center transition-all duration-[2500ms] ${
            isOnScreen
              ? "translate-y-[0px] text-text/40 text"
              : "translate-y-[20px] text-text/0 text"
          }}`}
        >
          &copy; 2023 Brian Maleki
        </p>
      </div>
    </section>
  );
};

export default Footer;
