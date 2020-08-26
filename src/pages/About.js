import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';

function About() {
    return (
        <Container id="about" className="f-vh bg-def">
            <Grid stackable divided>
                <Grid.Row columns={2}>

                    <Grid.Column width={10} verticalAlign="middle">
                        <div className="pt-10"></div>
                        <Header>About Me</Header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        
                    </Grid.Column>

                    <Grid.Column width={6} className="tech-cont">
                        <div className="pt-10"></div>
                        <Header textAlign="left">Technical Skills</Header>
                        <ul className="techList">
                            <li>CSS</li>
                            <li>EJS</li>
                            <li>Express</li>
                            <li>HTML</li>
                            <li>Javascript</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                            <li>Python</li>
                            <li>React</li>
                            <li>Semantic UI</li>
                            <li>Sequelize</li>
                            <li>SQL</li>
                            <li>Typescript</li>

                        </ul>
                    </Grid.Column>

                </Grid.Row>
            </Grid>
        </Container>
    )
}
export default About;