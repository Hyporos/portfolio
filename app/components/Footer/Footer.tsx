"use client";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs, TbBrandVercel } from "react-icons/tb";
import useOnScreen from "@/app/hooks/isOnScreen";
import "./Footer.css";

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 749px)" });
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
            <BiLogoReact
              size={isMobile ? 35 : 40}
              className="logo-icon fill-primary hover:fill-accent"
            />
          </a>
          <a href="https://nextjs.org/" target="_blank">
            <TbBrandNextjs
              size={isMobile ? 35 : 40}
              className="logo-icon stroke-primary hover:stroke-accent"
            />
          </a>
          <a href="https://vercel.com/" target="_blank">
            <TbBrandVercel
              size={isMobile ? 35 : 40}
              className="logo-icon stroke-primary hover:stroke-accent"
            />
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <BiLogoTailwindCss
              size={isMobile ? 35 : 40}
              className="logo-icon fill-primary hover:fill-accent"
            />
          </a>
        </div>
        <p className={`text-text/40 text-center transition-all duration-[2500ms] ${isOnScreen
              ? "translate-y-[0px] opacity-100"
              : "translate-y-[20px] opacity-0"
          }}`}>&copy; 2023 Brian Maleki</p>
      </div>
    </section>
  );
};

export default Footer;
