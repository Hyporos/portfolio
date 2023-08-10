import Image from "next/image";
import "./Conclusion.css";

const Conclusion = () => {
  return (
    <section className="conclusion">
      <div className="flex space-x-8 items-center">
        <div className="border-primary/25 border-t w-[750px]"></div>
      </div>
      <div className="my-36 flex flex-col items-center space-y-12">
        <div className="text-text text-center font-light space-y-6">
          <p className="text-6xl text-accent">Get In Touch</p>
          <p className="text-lg">
            I&apos;m open to any new opportunities, so I&apos;d be happy to get
            back to you!
          </p>
        </div>
        <button className="text-text text-center font-semibold tracking-wide text-xl uppercase border-2 border-primary hover:bg-primary hover:text-background duration-700  transition-all rounded-lg w-[180px] h-[55px]">
          Mail me
        </button>
        <div className="flex space-x-8">
          <Image
            src="/badges/LinkedIn.webp"
            className="opacity-50 hover:opacity-100 transition-all"
            alt="LinkedIn"
            draggable="false"
            width={35}
            height={35}
          ></Image>
          <Image
            src="/badges/GitHub.webp"
            className="opacity-50 hover:opacity-100 transition-all"
            alt="GitHub"
            draggable="false"
            width={35}
            height={35}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
