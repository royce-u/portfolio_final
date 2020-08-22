import React from 'react';
import './App.css';

import Nav from './navigation/Nav'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
         <Nav sticky="top"/>
         <Home />
         <Projects />
         <Contact />
         
    </div>
  );
}

export default App;
