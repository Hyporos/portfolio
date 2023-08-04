import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Conclusion from "./components/Conclusion/Conclusion";

export default function Page() {
  return (
    <main>
      <Welcome />
      <About />
      <Skills />
      <Projects />
      <Conclusion />
    </main>
  );
}
