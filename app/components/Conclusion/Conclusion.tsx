import Image from "next/image";
import "./Conclusion.css";

const Conclusion = () => {
  return (
    <section className="conclusion">
      <div className="flex space-x-8 items-center">
        <div className="border-primary/25 border-t w-[750px]"></div>
        <h1 className="text-primary text-4xl uppercase font-light tracking-wider">
          CONTACT
        </h1>
      </div>
      <div className="my-32">
        <h2 className="text-text text-center text-xl font-light">Reach out</h2>
      </div>
    </section>
  );
};

export default Conclusion;
