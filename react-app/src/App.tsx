import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { SectionHeader } from "./components/SectionHeader/SectionHeader";
import Projects from "./components/Projects/Projects";
import ProjectsButton from "./components/ProjectsButton/ProjectsButton";
import Contato from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SectionHeader />
      <Projects />
      <ProjectsButton />
      <SectionHeader />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
