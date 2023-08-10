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
      <div className="my-36 flex flex-col items-center space-y-16">
        <h2 className="text-text text-center text-xl font-light">
            Would you like to work with me? I&apos;d love to hear about it!
        </h2>
        <button className="text-text text-center text-xl uppercase border-2 border-primary rounded-xl w-[180px] h-[55px]">Mail me</button>
      </div>
    </section>
  );
};

export default Conclusion;
