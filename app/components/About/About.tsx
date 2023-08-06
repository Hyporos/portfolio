import Image from "next/image";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="flex space-x-8 items-center">
        <h1 className="text-primary text-4xl uppercase font-light tracking-wider">
          ABOUT
        </h1>
        <div className="border-primary/25 border-t w-[1000px]"></div>
      </div>
      <div className="mt-20 mb-12">
        <Image
          src="/portrait.webp"
          alt="Portrait"
          draggable="false"
          width={300}
          height={300}
        ></Image>
      </div>
      <div className="flex tracking-wide flex-col space-y-6">
        <p className="text-text text-center text-xl font-light">
          I&apos;m a web developer with a passion for design based in Toronto,
          Canada.
        </p>
        <p className="text-text text-center text-xl font-light">
          I strive to create aesthetic applications that prove to be useful to
          others.
        </p>
        <p className="text-text text-center text-xl font-light">
          When I&apos;m not occupied with coding, you can find me hiking in
          nature,
          <br></br> studying languages, or spending time online.
        </p>
      </div>
    </section>
  );
};

export default About;
