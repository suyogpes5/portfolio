import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Learning from "./components/Learning";
import Projects from "./components/Projects";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Mindset from "./components/Mindset";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mindset />
      <Stats />
      <About />
      <Skills />
      <Learning />
      <Projects />
      <GithubStats />
      <Contact />
      <Footer />
    </>
  );

}

export default App;