import Image from "next/image";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer h-[200px]">
      <div className="flex flex-col items-center space-y-8">
        <p className="text-text text-xl text-center">
          Portfolio <br></br> Built with
        </p>
        <div className="flex space-x-4">
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
                <Image
          src="/badges/React.webp"
          className="opacity-50 hover:opacity-100 transition-all"
          alt="React"
          draggable="false"
          width={35}
          height={35}
        ></Image>
        </div>
      </div>
    </section>
  );
};

export default Footer;
