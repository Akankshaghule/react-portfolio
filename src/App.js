import Navbar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/skiils";
import Projects from "./components/Projects/projects";
import Experience from "./components/Experiences/inter";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
