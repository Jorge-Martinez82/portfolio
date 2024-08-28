import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Chat from "./components/Chat";

function App() {
  return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar/>
        <About/>
        <Projects/>
        <Skills/>
        <Chat/>
        <Contact/>
      </main>
  );
}

export default App;
