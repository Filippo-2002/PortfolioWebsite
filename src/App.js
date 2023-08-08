import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from '../src/Nav/Nav.js';
import About from './about/About.js'; 
import Skills from '../src/skills/Skills.js';
import Projects from '../src/projects/Projects.js';
import Contact from '../src/contact/Contact.js';
import Background from './background/Background.js';
import PlayerStats from './playerStats/PlayerStats.js';



const App = () => {
  return (
    <Router>
     <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PlayerStats />
    </Router>
  );
};

export default App;