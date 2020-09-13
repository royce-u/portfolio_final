import React from 'react';
import { Container, Grid, List } from 'semantic-ui-react';

function About() {
    return (
        <Container id="about" className="f-vh">
            {/* <div className="pt-20 fw"></div> */}
            <Grid stackable divided>
                <Grid.Row>
                    <Grid.Column width={8} verticalAlign="middle">
                        <div className="pt-10"></div>
                        <h3>About Me</h3>
                    </Grid.Column>
                    <Grid.Column width="8" verticalAlign="middle" textAlign="left">
                    <div className="pt-30"></div>
                        <div className="aboutText">
                            <p>Full stack developer skilled in Javascript, React, and Python. With my background in Hospitality and experiences meeting different people, I understand the needs of individual users. I take a creative approach to problem-solving and build scalable, user-friendly solutions for every user.  My eagerness to learn strengthens my skills to work towards creating advanced technological solutions for worthy causes to change the world.</p>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <hr/>
                        <div className="pt-10"></div>
                        <h3>Technical Skills</h3>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <List animated horizontal>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>EJS</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>Express</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>HTML</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>Javascript</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>MondoDB</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>Mongoose</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>Node.js</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>PostgreSQL</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>Python</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>React</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>Semantic UI</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>Sequelize</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>SQL</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>Typescript</List.Header>
                                    </List.Content>
                                </List.Item>
                            </List>
                            <hr/>
                        </Grid.Column>
                    
                </Grid.Row>
            </Grid>
        </Container>
    )
}
export default About;