import React from 'react';
import {Route} from 'react-router-dom';

import Home from './pages/Home'
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Projects from './pages/Projects';

const Content = props => {
    return (
        <div>     
            <Home />
            <Projects />
            <Contact />
        </div>
    )
}

export default Content