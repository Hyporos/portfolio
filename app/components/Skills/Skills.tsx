import "./Skills.css";
import Image from "next/image";

const Skills = () => {
  return (
    <section>
      <div className="flex tracking-wide flex-col space-y-4 bg-secondary/75 justify-center items-center rounded-3xl w-[900px] h-[400px]">
        <div>
          <h2 className="text-text text-center text-xl font-light">
            Front-End
          </h2>
          <div className="flex space-x-8">
            <Image
              src="/badges/HTML5.webp"
              alt="HTML5"
              draggable="false"
              width={75}
              height={75}
            ></Image>
            <Image
              src="/badges/CSS3.webp"
              alt="CSS3"
              draggable="false"
              width={75}
              height={75}
            ></Image>
            <Image
              src="/badges/JS.webp"
              alt="JavaScript"
              draggable="false"
              width={75}
              height={75}
            ></Image>
            <Image
              src="/badges/TS.webp"
              alt="TypeScript"
              draggable="false"
              width={75}
              height={75}
            ></Image>
            <Image
              src="/badges/React.webp"
              alt="React & Raact Native"
              draggable="false"
              width={75}
              height={75}
            ></Image>
            <Image
              src="/badges/Next.webp"
              alt="Next.js"
              draggable="false"
              width={75}
              height={75}
            ></Image>
            <Image
              src="/badges/Tailwind.webp"
              alt="Tailwind CSS"
              draggable="false"
              width={75}
              height={75}
            ></Image>
          </div>
        </div>
        <div>
          <h2 className="text-text text-center text-xl font-light">Back-End</h2>
          <div className="flex space-x-8">
            <Image
              src="/badges/C++.webp"
              alt="C++"
              draggable="false"
              width={75}
              height={75}
            ></Image>
                        <Image
              src="/badges/SQL.webp"
              alt="SQL"
              draggable="false"
              width={75}
              height={75}
            ></Image>
                                    <Image
              src="/badges/Express.webp"
              alt="Express.js"
              draggable="false"
              width={75}
              height={75}
            ></Image>
          </div>
        </div>
        <div>
          <h2 className="text-text text-center text-xl font-light">Other</h2>
          <div className="flex space-x-8">
            <Image
              src="/badges/NodeJS.webp"
              alt="Node.js"
              draggable="false"
              width={75}
              height={75}
            ></Image>
            <Image
              src="/badges/MongoDB.webp"
              alt="MongoDB"
              draggable="false"
              width={75}
              height={75}
            ></Image>
            <Image
              src="/badges/Git.webp"
              alt="Git"
              draggable="false"
              width={75}
              height={75}
            ></Image>
            <Image
              src="/badges/Figma.webp"
              alt="Figma"
              draggable="false"
              width={75}
              height={75}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
