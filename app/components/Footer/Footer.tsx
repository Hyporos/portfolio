import Image from "next/image";
import "./Footer.css";

import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs, TbBrandVercel } from "react-icons/tb";

const Footer = () => {
  return (
    <section className="footer bg-background/50 h-[200px]">
      <div className="flex flex-col items-center space-y-6">
        <p className="text-text text-xl text-center">Built with</p>
        <div className="flex space-x-4">
          <a href="https://react.dev/" target="_blank">
            <BiLogoReact
              size={40}
              className="fill-primary hover:fill-accent transition-all duration-300 opacity-85"
            />
          </a>
          <a href="https://nextjs.org/" target="_blank">
            <TbBrandNextjs
              size={40}
              className="stroke-primary hover:stroke-accent transition-all duration-300 opacity-85"
            />
          </a>
          <a href="https://vercel.com/" target="_blank">
            <TbBrandVercel
              size={40}
              className="stroke-primary hover:stroke-accent transition-all duration-300 opacity-85"
            />
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <BiLogoTailwindCss
              size={40}
              className="fill-primary hover:fill-accent transition-all duration-300 opacity-85"
            />
          </a>
        </div>
        <p className="text-text/40 text-center">&copy; 2023 Brian Maleki</p>
      </div>
    </section>
  );
};

export default Footer;
