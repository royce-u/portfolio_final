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
        <Container id="contact" className="pt-5">
            <div className="pt-5"></div>
            <Grid stackable centered>
                <Grid.Row className="bg-red" textAlign="center">
                    <div>
                        <h1>Have a project in mind?</h1>
                        <h2>Drop a line below and let's get started!</h2>
                    </div>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={12}>
                        <Form size="large">
                            <Form.Group widths="equal">
                                <Form.Field
                                    id="email"
                                    control={Input}
                                    label="EMAIL"
                                    required="true"
                                />
                                <Form.Field
                                    id="name"
                                    control={Input}
                                    label="NAME"
                                />
                            </Form.Group>
                            <Form.Field required>
                                <label>MESSAGE</label>
                                <textarea id="message" rows="10" />
                            </Form.Field>
                            <Form.Field
                                control={Button}
                                content="Confirm"
                            />
                        </Form>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign="center">
                        <div>
                        <a href="https://github.com/royce-u/" target="_blank"><Icon color="grey" name="github" size="huge" className="link-clean" /></a>
                        <a href="https://www.linkedin.com/in/royce-ubando/" target="_blank"><Icon color="grey" name="linkedin" size="huge" className="link-clean" /></a>
                        <a href="../Resume.pdf" target="_blank"><Icon color="grey" name="file" size="huge" className="link-clean" /></a>
                        </div>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </Container>
    )
}

export default Contact;


