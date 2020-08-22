import React, { useRef, useState } from 'react';
import { Container, Grid, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'



const Contact = () => {

    // function copyToClipboard(e) {
    //     let email = document.getElementById('email')
    //     email.select()
    //     document.execCommand("copy")
    //     console.log(email)
    // }
    return (
        <Container className="pt-5" id="contact">
            <Grid stackable>
                <Grid.Row>
                    <h1 className="header-txt w-hunnit">Contact</h1>
                </Grid.Row>
                <Grid.Row centered>
                    <p><Icon name="mail" size="massive" color="grey" /><h4>royce.ubando.dev@gmail.com</h4></p>
                    <p><a href="https://github.com/royce-u/" target="_blank"><Icon color="grey" name="github" size="massive" className="link-clean" /></a><h4>Github</h4></p>
                    <p><a href="https://www.linkedin.com/in/royce-ubando/" target="_blank"><Icon color="grey" name="linkedin" size="massive" className="link-clean" /></a><h4>LinkedIn</h4></p>
                    <p><a href="../Design_Resume.pdf" target="_blank"><Icon color="grey" name="file" size="massive" className="link-clean" /></a><h4>Resume</h4></p>
                </Grid.Row>
                {/* <Grid.Row><h3 className="header-txt w-hunnit">Technical Skills</h3></Grid.Row> */}
            </Grid>
        </Container>
    )
}

export default Contact;