import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Container, Grid, Header, Image } from 'semantic-ui-react'

const Projects = () => {
    return (
        <Container className="f-vh mt-20" id="projects">
            <Grid columns={2} stackable divided="vertically">
                <Grid.Row>
                </Grid.Row>
                <h1>Projects</h1>
                <Grid.Row>
                    <Grid.Column>
                        <Image size='large' bordered src='../images/tastyRoots-home.png' alt='tastyroots image' />
                    </Grid.Column>
                    <Grid.Column textAlign="left" verticalAlign="middle">
                        <Header>Tasty Roots</Header>
                        <p>A place to preserve family recipes</p>
                        <p>Cloudinary Upload Widget, Express, JavaScript, JWT, Mongoose, MongoDB, Node.js, React, React Semantic UI, Redux</p>
                        <br/>
                        <input type="button" value="Preview" className="proj-btn tr-btn"/><input type="button" className="proj-btn tr-btn" value="Visit Site" />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Image rounded size='large' src='../images/dodoSwap-home.png' />
                    </Grid.Column>
                    <Grid.Column textAlign="left" verticalAlign="middle">
                        <Header>Dodo Swap</Header>
                        <p>A way for Animal Crossing Fans to arrange catalogue parties</p>
                        <p>Express, JavaScript, JWT, Mongoose, MongoDB, Node.js, React, React Semantic UI, Typescript</p>
                        <br/>
                        <input type="button" value="Preview" className="proj-btn ds-btn"/>
                        <input type="button" value="Visit Site" className="proj-btn ds-btn"/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    <Image size='large' src='../images/blockParty-home.png' alt='blockparty image' />
                    </Grid.Column>
                    <Grid.Column textAlign="left" verticalAlign="middle">
                        <Header>Block Party</Header>
                        <p>Connecting you with your local community</p>
                        <p>Bcrypt JS, Express EJS Layouts, Javascript, Materialize, Node.js, Passport, SQL, Sequelize</p>
                        <br/>
                        <input type="button" value="Preview" className="proj-btn"/>
                        <input type="button" value="Visit Site" className="proj-btn"/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}


export default Projects