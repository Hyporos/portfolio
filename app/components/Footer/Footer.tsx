"use client";
import { useMediaQuery } from "react-responsive";
import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs, TbBrandVercel } from "react-icons/tb";
import "./Footer.css";

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 749px)" });
  return (
    <section className="footer">
      <div className="flex flex-col items-center space-y-4 desktop:space-y-6">
        <p className="text-text text-center text-lg desktop:text-xl">
          Built with
        </p>
        <div className="flex space-x-3 desktop:space-x-4">
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
        <p className="text-text/40 text-center">&copy; 2023 Brian Maleki</p>
      </div>
    </section>
  );
};

export default Footer;
