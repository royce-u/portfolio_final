import React from 'react';
import { Link } from 'react-router-dom'

const Nav = props => {
    return (
        <nav>
            <ul>
                <li><a href="#home" className="menu">Home</a></li>
                <li><a href="#projects" className="menu">Projects</a></li>
                <li><a href="#contact" className="menu">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav