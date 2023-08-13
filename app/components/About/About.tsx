"use client";
import { useState } from "react";
import Image from "next/image";
import "./About.css";

const About = () => {
  const [skills, setSkills] = useState(1);

  return (
    <section className="about">
      <div className="flex space-x-8 items-center mt-36">
        <h1 className="text-primary text-4xl uppercase font-light tracking-wider">
          ABOUT
        </h1>
        <div className="border-primary/25 border-t w-[900px]"></div>
      </div>
      <div className="flex justify-center items-center space-x-16 my-36 max-h-[300px] max-w-[1000px]">
        <div className="flex flex-col justify-between">
          <p className=" text-text text-justify [text-align-last:justify] text-xl font-light">
            I&apos;m a web developer with a passion for design based in Toronto,
            Canada. Growing up, I was always around technology. As a result, I
            had been fascinated by the idea of creating new things. Fast forward
            to today, I now strive to develop tools that prove to be useful to
            others. When I&apos;m not occupied with coding, you can find me
            hiking, rock climbing, or studying a new language.
          </p>
          <div className="border-primary/25 border-t w-[636px] my-6"></div>
          <div className="flex px-12 uppercase tracking-wide">
            <div className="w-1/3 text-left">
              <span
                className={`transition-all cursor-pointer text-accent hover:font-semibold ${
                  skills === 1 ? "font-semibold" : "font-light"
                }`}
                onClick={() => setSkills(1)}
              >
                Front-End
              </span>
            </div>
            <div className="w-1/3 text-center">
              <span
                className={`transition-all cursor-pointer text-accent hover:font-semibold ${
                  skills === 2 ? "font-semibold" : "font-light"
                }`}
                onClick={() => setSkills(2)}
              >
                Back-End
              </span>
            </div>
            <div className="w-1/3 text-right">
              <span
                className={`transition-all cursor-pointer text-accent hover:font-semibold ${
                  skills === 3 ? "font-semibold" : "font-light"
                }`}
                onClick={() => setSkills(3)}
              >
                Other
              </span>
            </div>
          </div>
          <div className="flex justify-around space-x-3.5 mt-6">
            <Image
              src="/badges/HTML5.webp"
              className="opacity-50 hover:opacity-100 transition-all"
              alt="HTML5"
              draggable="false"
              width={35}
              height={35}
            ></Image>
            <Image
              src="/badges/CSS3.webp"
              className="opacity-50 hover:opacity-100 transition-all"
              alt="CSS3"
              draggable="false"
              width={35}
              height={35}
            ></Image>
            <Image
              src="/badges/JS.webp"
              className="opacity-50 hover:opacity-100 transition-all"
              alt="JS"
              draggable="false"
              width={35}
              height={35}
            ></Image>
            <Image
              src="/badges/TS.webp"
              className="opacity-50 hover:opacity-100 transition-all"
              alt="TS"
              draggable="false"
              width={35}
              height={35}
            ></Image>
            <Image
              src="/badges/React.webp"
              className="opacity-50 hover:opacity-100 transition-all"
              alt="React"
              draggable="false"
              width={35}
              height={35}
            ></Image>
            <Image
              src="/badges/NextJS.webp"
              className="opacity-50 hover:opacity-100 transition-all"
              alt="NextJS"
              draggable="false"
              width={35}
              height={35}
            ></Image>
            <Image
              src="/badges/Tailwind.webp"
              className="opacity-50 hover:opacity-100 transition-all"
              alt="Tailwind"
              draggable="false"
              width={35}
              height={35}
            ></Image>
          </div>
        </div>
        <Image
          src="/portraits.webp"
          className="rounded-2xl border-accent/10 border-2"
          alt="Portrait"
          draggable="false"
          width={300}
          height={300}
        ></Image>
      </div>
    </section>
  );
};

export default About;
