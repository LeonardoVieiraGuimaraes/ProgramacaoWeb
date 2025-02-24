import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Header2 from "./components/Header2";
import Hero from "./components/Hero";
import ProjectsDeveloper from "./components/ProjectsDeveloper";
import ProjectsAcademics from "./components/ProjectsAcademics";
import ProjectsProfessor from "./components/ProjectsProfessor";
import Services from "./components/Services";
import Skills from "./components/Skills";

// import Textimonials from "./components/Textimonials";

function App() {
  return (
    <main>
      <Header />
      {/* <Header2 /> */}
      <Hero />
      <About />
      <Services />
      <ProjectsAcademics />
      <ProjectsDeveloper />
      <ProjectsProfessor />

      <Skills />
      {/* <Textimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
