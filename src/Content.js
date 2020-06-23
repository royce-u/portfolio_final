import React from 'react';
import {Route} from 'react-router-dom';

import Home from './pages/Home'
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Projects from './pages/Projects';

const Content = props => {
let projectsData = [
    // {name: 'Spanish21', tech: , description: "Played with 6 decks and no 10's, Spanish 21 is a variation of Blackjack that reduces the house edge by 1% when basic strategy is applied.", date: '10/10/19', link: 'https://royce-u.github.io/spanish21/'},
    {name: 'Block Party', tech: 'React, Javascript, Express, Sequelize', description: 'Connecting you with your local community', date: '4/28/20', link: "https://block-party206.herokuapp.com/"}
]
// let blogPosts = [
//     {title: 'My Life Story', content: 'Now this is a story all about how....'},
//     {title: 'My life got flipped-turned upside down', content: 'And i\'d like to take minute just sit right there.  I\'ll tell you how i became the price of a town called Bel Air'}
// ]


    return (
        <div>
            {/* <Route exact path="/" component={Home}/>
            <Route path="/about" render={ () => (
                <About />
            ) }/>
            <Route path="/blog" render={ () => (
                <Blog/>
            )} />
            <Route path="/projects" render={ () => (
                <Projects projectsData={projectsData} />
            )} /> */}
          
            <Home />
            <Projects />
            <Contact />
            
        </div>
    )
}

export default Content