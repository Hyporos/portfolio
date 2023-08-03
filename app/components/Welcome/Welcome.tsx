import ParticleBackground from "../ParticleBackground/ParticleBackground";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome">
      <ParticleBackground />
      <div className="flex flex-col text-center space-y-6 text-text font-extralight tracking-wide">
        <h1 className="text-7xl">Hey! I&apos;m Brian Maleki.</h1>
        <h2 className="text-6xl">I&apos;m a <span className="text-accent font-light">front-end</span> developer.</h2>
      </div>
    </section>
  );
};

export default Welcome;
