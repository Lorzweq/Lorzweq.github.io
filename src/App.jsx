import "./App.css";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
