import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="md:mx-24">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
