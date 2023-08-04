import "./About.css";
import Image from "next/image";

const About = () => {
  return (
    <section className="about">
      <div className="flex tracking-wide flex-col space-y-4 pt-36 bg-secondary/75 justify-center items-center rounded-3xl w-[900px] h-[400px]">
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
      <div className="flex absolute translate-y-[-200px]">
        <Image
          src="/portrait.webp"
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
