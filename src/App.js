
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Projects from './components/Projects';


function App() {

  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/home" element={<Home/>} /> 
          <Route path="/about" element={<About/>} />  
          <Route path="/contact" element={<Contact/>} /> 
          <Route path="/services" element={<Services/>} />
          <Route path="/projects" element={<Projects/>} /> 
        </Routes>
      </div>
  );
}

export default App;
