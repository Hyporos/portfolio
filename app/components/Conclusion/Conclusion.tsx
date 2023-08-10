import Image from "next/image";
import "./Conclusion.css";

const Conclusion = () => {
  return (
    <section className="conclusion">
      <div className="flex space-x-8 items-center">
        <h1 className="text-primary text-4xl uppercase font-light tracking-wider">
          CONTACT
        </h1>
        <div className="border-primary/25 border-t w-[750px]"></div>
      </div>
      <div className="my-32">
        <h2 className="text-text text-center text-xl font-light">
          I&apos;m currently open to any new opportunities for
          development-related work. <br></br> Whether you have an inquiry or just want to
          to say hello, I&apos;ll get back to you as soon as possible!
        </h2>
      </div>
    </section>
  );
};

export default Conclusion;
