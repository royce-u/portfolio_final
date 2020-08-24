import React from 'react';
import { Link } from 'react-router-dom'

const Nav = props => {
    return (
        <nav>
            <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about" float="left">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav