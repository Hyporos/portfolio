import Image from "next/image";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="flex space-x-8 items-center mt-32">
        <h1 className="text-primary text-4xl uppercase font-light tracking-wider">
          ABOUT
        </h1>
        <div className="border-primary/25 border-t w-[900px]"></div>
      </div>
      <div className="flex justify-center items-center space-x-16 my-32 max-h-[300px] max-w-[1000px]">
        <div className="flex flex-col justify-between">
          <p className=" text-text text-justify [text-align-last:justify] text-xl font-light">
            I&apos;m a web developer with a passion for design based in Toronto,
            Canada. Growing up, I was always around technology. As a result, I
            had been fascinated by the idea of creating new things. Fast forward
            to today, I now strive to develop tools that prove to be useful to
            others. When I&apos;m not occupied with coding, you can find me
            hiking, rock climbing, or studying a new language.
          </p>
          <div className="border-accent/25 border-t w-[636px] my-5"></div>
          <div className="flex justify-between px-12">
            <p className="w-1/3 text-left text-accent uppercase font-light tracking-wide">
              Front-End
            </p>
            <p className="w-1/3 text-center text-accent uppercase font-light tracking-wide">
              Back-End
            </p>
            <p className="w-1/3 text-right text-accent uppercase font-light tracking-wide">
              Other
            </p>
          </div>
          <div className="flex justify-start space-x-4 my-5">
            <Image
              src="/badges/HTML5.webp"
              alt="HTML5"
              draggable="false"
              width={35}
              height={35}
            ></Image>
            <Image
              src="/badges/CSS3.webp"
              alt="CSS3"
              draggable="false"
              width={35}
              height={35}
            ></Image>
            <Image
              src="/badges/JS.webp"
              alt="JS"
              draggable="false"
              width={35}
              height={35}
            ></Image>
            <Image
              src="/badges/TS.webp"
              alt="TS"
              draggable="false"
              width={35}
              height={35}
            ></Image>
            <Image
              src="/badges/React.webp"
              alt="React"
              draggable="false"
              width={35}
              height={35}
            ></Image>
            <Image
              src="/badges/NextJS.webp"
              alt="NextJS"
              draggable="false"
              width={35}
              height={35}
            ></Image>
            <Image
              src="/badges/Tailwind.webp"
              alt="Tailwind"
              draggable="false"
              width={35}
              height={35}
            ></Image>
          </div>
        </div>
        <Image
          src="/portraits.webp"
          className="rounded-2xl"
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
