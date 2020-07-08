import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';




import Nav from './navigation/Nav'
import About from './pages/Contact';
import Blog from './pages/Blog';
import Content from './Content';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
       <Router>
         <Nav sticky="top"/>
         <Content />
       </Router>
    </div>
  );
}

export default App;
