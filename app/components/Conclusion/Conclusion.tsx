import Image from "next/image";
import "./Conclusion.css";

const Conclusion = () => {
  return (
    <section className="conclusion">
      <div className="flex space-x-8 items-center">
        <div className="border-primary/25 border-t w-[1000px]"></div>
        <h1 className="text-primary text-4xl uppercase font-light tracking-wider">
          CONTACT
        </h1>
      </div>
      <div className="flex tracking-wide flex-col space-y-4  justify-center items-center">
      <h2 className="text-white">
        Want to reach out?
      </h2>
      </div>
    </section>
  );
};

export default Conclusion;
