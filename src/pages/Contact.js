import React from 'react';
import { Container, Form, Grid, Header, Icon, Image, Input, Button, TextArea } from 'semantic-ui-react';


const Contact = () => {

    // function copyToClipboard(e) {
    //     let email = document.getElementById('email')
    //     email.select()
    //     document.execCommand("copy")
    //     console.log(email)
    // }
    return (
        <Container id="contact">
            <div className="pt-5"></div>
            <Grid stackable centered>
                <Grid.Row className="bg-red">
                    <h1>Want to work together on a project?</h1>
                    <h2>Drop a line below</h2>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={10} height={7}>
                        <Form>
                            <Form.Group widths="equal">
                                <Form.Field
                                    id="email"
                                    control={Input}
                                    label="Email"
                                    />
                                <Form.Field
                                    id="name"
                                    control={Input}
                                    label="Name"
                                    />
                            </Form.Group>
                            <Form.Field
                            id="message"
                            control={TextArea}
                            label="Message"
                            className="h-100"
                            />
                            <Form.Field
                            control={Button}
                            content="Confirm"
                            />
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Contact;


{/* <Grid.Row>
    <Grid.Column>
        <p><Icon name="mail" size="massive" color="grey" /><h4>royce.ubando.dev@gmail.com</h4></p>
        <p><a href="https://github.com/royce-u/" target="_blank"><Icon color="grey" name="github" size="massive" className="link-clean" /></a><h4>Github</h4></p>
        <p><a href="https://www.linkedin.com/in/royce-ubando/" target="_blank"><Icon color="grey" name="linkedin" size="massive" className="link-clean" /></a><h4>LinkedIn</h4></p>
        <p><a href="../Design_Resume.pdf" target="_blank"><Icon color="grey" name="file" size="massive" className="link-clean" /></a><h4>Resume</h4></p>
    </Grid.Column>
</Grid.Row> */}