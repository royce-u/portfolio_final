import React from 'react';
import './App.css';

import Nav from './navigation/Nav'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About'

function App() {
  return (
    <div className="App">
      
         <Nav sticky="top"/>
         {/* <Home />
         <Projects />
         <About /> */}
         <Contact />
    </div>
  );
}

export default App;
