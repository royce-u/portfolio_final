import React, { useRef, useState } from 'react';
import { Container, Grid, Icon, Image, Label } from 'semantic-ui-react';
import {  Link } from 'react-router-dom'



const About = () => {

    // function copyToClipboard(e) {
    //     let email = document.getElementById('email')
    //     email.select()
    //     document.execCommand("copy")
    //     console.log(email)
    // }
    return (
        <Container className="pad-5 fullSize">
            <Grid>
            <h1 id="contact" className="bg-grey header-txt w-hunnit">Contact</h1>
                <Grid.Row className="no-margin" centered>
                    <p><Icon name="mail" size="massive" color="grey"/><h4>royce.ubando.dev@gmail.com</h4></p>
                    <p><a href="https://github.com/royce-u/" target="_blank"><Icon color="grey" name="github" size="massive" className="link-clean" /></a><h4>Github</h4></p> 
                    <p><a href="https://www.linkedin.com/in/royce-ubando/" target="_blank"><Icon color="grey" name="linkedin" size="massive" className="link-clean" /></a><h4>LinkedIn</h4></p> 
                    <p><a href="../Design_Resume.pdf" target="_blank"><Icon color="grey" name="file" size="massive" className="link-clean" /></a><h4>Resume</h4></p> 
                </Grid.Row>
                <Grid.Row><h3 className="header-txt bg-grey w-hunnit">Technical Skills</h3></Grid.Row>
                <Grid.Row >
                <Image src="../javascript.svg" size="tiny"/>
                    <Image src="../005-python.svg" size="tiny" />
                    <Image src="../006-react.svg" size="tiny" />
                    <Image src="../025-typescript.svg" size="tiny" />
                    <Image src="../css.svg" size="tiny" />
                    <Image src="../html-5.svg" size="tiny" />
                    <Image src="../nodejs.svg" size="tiny" />
                    <Image src="../sequelize2.svg" size="tiny" />
                    <Image src="../mongodb.svg" size="tiny" className="bg-white"/>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default About