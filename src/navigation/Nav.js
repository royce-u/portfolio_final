import React from 'react';

const Nav = props => {
    return (
        <div className="navBar">
                <a href="#home" className="navHome"><img src="./images/logoClear.png" alt="logo" width="50" height="50" /></a>
                    <ul>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    </ul>
           
        </div>
    )
}

export default Nav;