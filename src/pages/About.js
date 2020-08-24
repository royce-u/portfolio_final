import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';

function About() {
    return (
        <Container columns={2} className="pt-10 f-vh" id="about">
            <Grid stackable>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Header>About Me</Header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h3" textAlign="center">Technical Skills</Header>
                        <div className="pt-10"></div>
                        <Image src="../images/css.svg" size="tiny" inline />
                        <Image src="../images/html-5.svg" size="tiny" inline />
                        <Image src="../images/javascript.svg" size="tiny" inline />
                        <Image src="../images/006-react.svg" size="tiny" inline />
                        <Image src="../images/025-typescript.svg" size="tiny" inline />
                        <Image src="../images/005-python.svg" size="tiny" inline />
                        <Image src="../images/nodejs.svg" size="tiny" inline />
                        <Image src="../images/sequelize2.svg" size="tiny" inline />
                        <Image src="../images/mongodb.svg" size="tiny" inline />
                    </Grid.Column>

                </Grid.Row>
            </Grid>
        </Container>
    )
}
export default About;