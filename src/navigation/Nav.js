import React from 'react';
import { Link } from 'react-router-dom';
import {Icon} from 'semantic-ui-react';

const Nav = props => {
    return (
        <div className="navBar">
                <a href="#home" className="navHome"><img src="./images/logo2Clear.png" alt="logo" width="50" height="50" /></a>
       
                    <ul>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
           
        </div>
    )
}

export default Nav