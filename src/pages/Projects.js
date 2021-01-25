import React, { useState } from 'react';
import { Container, Grid, Header, Image, Modal } from 'semantic-ui-react';
import TastyRootsModal from '../components/TastyRootsModal';
import DodoSwapModal from '../components/DodoSwapModal';
import BlockPartyModal from '../components/BlockPartyModal';

const Projects = () => {
    return (
        <Container id="projects" className="font">
            <Grid columns={2} stackable>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <div className="pt-10 fw">
                            <h3>PROJECTS</h3>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <div className="pt-20"></div>
                        <Image spaced="left" size='large' rounded src='../images/mb-tastyRoots.png' alt='tastyroots image' />
                    </Grid.Column>
                    <Grid.Column textAlign="left" verticalAlign="middle">
                        <div className="pt-20"></div>
                        <h1 className="font">Tasty Roots</h1>
                        <p>A place to preserve family recipes</p>
                        <p>Cloudinary Upload Widget, Express, JavaScript, JWT, Mongoose, MongoDB, Node.js, React, React Semantic UI, Redux</p>
                        <div className="pt-10"></div>
                        <TastyRootsModal />
                        <a href="https://tasty-roots-client.herokuapp.com/" className="proj-btn r-btn">Visit Site</a>
                        <div className="pt-20"></div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <hr />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <div className="pt-20"></div>
                        <Image spaced="left" rounded size='large' src='../images/mb-dodoSwap.png' />
                    </Grid.Column>
                    <Grid.Column textAlign="left" verticalAlign="middle">
                        <div className="pt-20"></div>
                        <h1 className="font">Dodo Swap</h1>
                        <p>A way for Animal Crossing Fans to arrange catalogue parties</p>
                        <p>Express, JavaScript, JWT, Mongoose, MongoDB, Node.js, React, React Semantic UI, Typescript</p>
                        <div className="pt-10"></div>
                        <DodoSwapModal />
                        <a href="http://dodo-swap.herokuapp.com/" className="proj-btn r-btn">Visit Site</a>
                        <div className="pt-20"></div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <hr />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <div className="pt-20"></div>
                        <Image spaced="left" rounded size='large' src='../images/mb-blockParty.png' alt='blockparty image' />
                    </Grid.Column>
                    <Grid.Column textAlign="left" verticalAlign="middle">
                        <div className="pt-20"></div>
                        <h1 className="font">Block Party</h1>
                        <p>Connecting you with your local community</p>
                        <p>Bcrypt JS, Express EJS Layouts, Javascript, Materialize, Node.js, Passport, SQL, Sequelize</p>
                        <div className="pt-10"></div>
                        <BlockPartyModal />
                        <a href="https://block-party206.herokuapp.com/" className="proj-btn r-btn">Visit Site</a>
                        <div className="pt-20"></div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <hr />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}


export default Projects