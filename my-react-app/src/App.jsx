import { profile } from "./data/content";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => (
  <>
    <a className="skip-link" href="#main">
      Skip to content
    </a>
    <Header />
    <main id="main">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <footer className="footer container">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  </>
);

export default App;
