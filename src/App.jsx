import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Github from "./sections/Github/github";
import Timeline from "./sections/Timeline/Timeline";

function App() {
  return (
    <>
      <Hero />
      <Timeline />
      <Projects />
      <Skills />
      {/* <Github /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
