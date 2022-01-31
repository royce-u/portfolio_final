import React from 'react';
import { Container, Grid, List } from 'semantic-ui-react';

function About() {
    return (
        <Container id="about">
            {/* <div className="pt-20 fw"></div> */}
            <Grid stackable divided>
                <Grid.Row>
                    <Grid.Column width={8} verticalAlign="middle">
                        <div className="pt-10">
                        <h3>ABOUT ME</h3>
                        </div>
                    </Grid.Column>
                    <Grid.Column width="8" verticalAlign="middle" textAlign="left">
                    <div className="pt-30"></div>
                        <div className="aboutText">
                            <p>Full-Stack developer skilled in JavaScript, React, Flutter, Dart, Python, HTML and CSS. Coming from a background in hospitality, I’ve built solid proficiencies in communication, troubleshooting and attention to detail.  Understanding the needs of individual users. I take a creative approach to problem-solving and build scalable, user-friendly solutions for everyone.  My eagerness to learn fuels my drive to work towards creating advanced technological solutions to improve our everyday lives.</p>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <hr/>
                        <div className="pt-10"></div>
                        <h3>TECHNICAL SKILLS</h3>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <List animated horizontal>
                            <List.Item>
                                    <List.Content>
                                        <List.Header>Dart</List.Header>
                                    </List.Content>
                                </List.Item>
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
                                        <List.Header>Flutter</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>HTML</List.Header>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <List.Header>JavaScript</List.Header>
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