import Welcome from "./components/Welcome/Welcome";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Conclusion from "./components/Conclusion/Conclusion";
import Footer from "./components/Footer/Footer";

export default function Page() {
  return (
    <main>
        <Welcome />
        <div className="bg-gradient-to-tr from-background-g to-background">
        <About />
        <Projects />
        <Conclusion />
        </div>
        <Footer />
    </main>
  );
}
