import React, { useRef, useState } from 'react';
import { Grid, Icon, Image, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom'



const About = () => {




    function copyToClipboard(e) {
        let email = document.getElementById('email')
        email.select()
        document.execCommand("copy")
        console.log(email)
    }
    return (
        <Container className="header-top fullSize">
            <h1 id="contact">Contact</h1>
            <Grid>
                <Grid.Row>
                    <input type="hidden" id="email" value="royceubando@gmail.com" />
                    <Icon name="mail" size="massive" onClick={(e) => copyToClipboard(e)} />
                    <a href="https://github.com/royce-u/" target="_blank"><Icon name="github" size="massive" className="link-clean" /></a>
                    <a href="https://www.linkedin.com/in/royce-ubando/" target="_blank"><Icon name="linkedin" size="massive" className="link-clean" /></a>
                </Grid.Row>
                <Grid.Row><h3>Technical Skills</h3></Grid.Row>
                <Grid.Row>
                    
                    
                <Image src="../javascript.svg" size="tiny" />
                    <Image src="../005-python.svg" size="tiny" />
                    <Image src="../006-react.svg" size="tiny" />
                    <Image src="../025-typescript.svg" size="tiny" />
                    <Image src="../css.svg" size="tiny" />
                    <Image src="../html-5.svg" size="tiny" />
                    <Image src="../nodejs.svg" size="tiny" />
                    <Image src="../sql-2.svg" size="tiny" className="bg-white" circular />
                    <Image src="../mongodb.svg" size="tiny" circular />
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default About