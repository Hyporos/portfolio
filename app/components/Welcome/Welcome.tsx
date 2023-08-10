import ParticleBackground from "../ParticleBackground/ParticleBackground";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome">
      <ParticleBackground />
      <div className="flex flex-col text-center space-y-6 text-text font-extralight tracking-wide select-none">
        <h1 className="text-7xl">
          <span className="text-accent font-light">Hey</span>! I&apos;m Brian
          Maleki.
        </h1>
        <h2 className="text-6xl">
          Welcome to my{" "}
          <span className="text-accent font-light">portfolio</span>.
        </h2>
      </div>
    </section>
  );
};

export default Welcome;
