
import './App.css';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Chat from "./components/Chat";
import {About} from "./components/About";

function App() {
  return (
      <main className="text-gray-400 bg-gray-900 body-font font-mono">
        <Navbar/>
        <Home/>
        <Projects/>
        <Skills/>
        <About/>
        <Chat/>
        <Contact/>
      </main>
  );
}

export default App;
