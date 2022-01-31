import React from 'react';
import { Container, Form, Grid, Icon, Input, Button, Message } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';


const Contact = () => {
    // function copyToClipboard(e) {
    //     let email = document.getElementById('email')
    //     email.select()
    //     document.execCommand("copy")
    //     console.log(email)
    // }

    let handleSubmit = () => {
        console.log('gotcha')
        return <Redirect to={"http://royce.ubando.com"} />

    }


    return (
        <Container id="contact" className="pt-5">
            <div className="pt-5"></div>
            <div className="w-fw">

            <Grid stackable centered>
                <Grid.Row textAlign="center">
                    <div className="pt-10">
                        <h1>Interested in working together?</h1>
                        <h2>Fill out the form below with some details about your project and I will get back to you as soon as I can.</h2>
                    </div>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={12}>
                        <Form size="large" onSubmit={handleSubmit} action="https://getform.io/f/8632b06c-e7e8-428d-aae5-f2d9b54c65fa" method="POST">
                            <Form.Group widths="equal">
                                <Form.Field
                                    name="email"
                                    control={Input}
                                    label="EMAIL"
                                    required="true"
                                />
                                <Form.Field
                                    name="name"
                                    control={Input}
                                    label="NAME"
                                />
                            </Form.Group>
                            <Form.Field required>
                                <label>MESSAGE</label>
                                <textarea name="message" id="message" rows="10" />
                            </Form.Field>
                            <Message
                                success
                                header='Form Completed'
                                content="You're all signed up for the newsletter"
                            />
                            <Form.Field
                                control={Button}
                                content="Confirm"
                                textAlign="right"
                            />
                        </Form>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign="center">
                        <div>
                            <a href="https://github.com/royce-u/" target="_blank"><Icon color="grey" name="github" size="huge" className="link-clean" /></a>
                            <a href="https://www.linkedin.com/in/royce-ubando/" target="_blank"><Icon color="grey" name="linkedin" size="huge" className="link-clean" /></a>
                            <a href="../resume.pdf" target="_blank"><Icon color="grey" name="file" size="huge" className="link-clean" /></a>
                        </div>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
            </div>
        </Container>
    )
}

export default Contact;


