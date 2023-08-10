import Image from "next/image";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer bg-background/50 h-[200px]">
      <div className="flex flex-col items-center space-y-6">
        <p className="text-text text-xl text-center">Built with</p>
        <div className="flex space-x-4">
          <Image
            src="/badges/React.webp"
            className="opacity-75 transition-all"
            alt="React"
            draggable="false"
            width={35}
            height={35}
          ></Image>
          <Image
            src="/badges/NextJS.webp"
            className="opacity-75 transition-all"
            alt="NextJS"
            draggable="false"
            width={35}
            height={35}
          ></Image>
          <Image
            src="/badges/Vercel.webp"
            className="opacity-75 transition-all"
            alt="Vercel"
            draggable="false"
            width={35}
            height={35}
          ></Image>
          <Image
            src="/badges/Tailwind.webp"
            className="opacity-75 transition-all"
            alt="Tailwind"
            draggable="false"
            width={35}
            height={35}
          ></Image>
        </div>
        <p className="text-text/30 text-center">&copy; 2023 Brian Maleki</p>
      </div>
    </section>
  );
};

export default Footer;
