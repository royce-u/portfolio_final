import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Header, Image } from 'semantic-ui-react';

const Projects = () => {
    return (
        <Container id="projects" className="font">
            <Grid columns={2} stackable>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <hr />
                        <div className="pt-10 fw">
                            <h3>PROJECTS</h3>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <div className="pt-20"></div>
                        <Image spaced="left" size='large' rounded src='../images/tastyRoots-home.png' alt='tastyroots image' />
                    </Grid.Column>
                    <Grid.Column textAlign="left" verticalAlign="middle">
                        <div className="pt-20"></div>
                        <h3 className="font">Tasty Roots</h3>
                        <p>A place to preserve family recipes</p>
                        <p>Cloudinary Upload Widget, Express, JavaScript, JWT, Mongoose, MongoDB, Node.js, React, React Semantic UI, Redux</p>
                        <div className="pt-10"></div>
                        <a href="#" className="proj-btn tr-btn">Preview</a>
                        <a href="https://tasty-roots-client.herokuapp.com/" className="proj-btn tr-btn">Visit Site</a>
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
                        <Image spaced="left" rounded size='large' src='../images/dodoSwap-home.png' />
                    </Grid.Column>
                    <Grid.Column textAlign="left" verticalAlign="middle">
                        <div className="pt-20"></div>
                        <h3 className="font">Dodo Swap</h3>
                        <p>A way for Animal Crossing Fans to arrange catalogue parties</p>
                        <p>Express, JavaScript, JWT, Mongoose, MongoDB, Node.js, React, React Semantic UI, Typescript</p>
                        <div className="pt-10"></div>
                        <a href="#" className="proj-btn ds-btn">Preview</a>
                        <a href="http://dodoswap.herokuapp.com/" className="proj-btn ds-btn">Visit Site</a>
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
                        <Image spaced="left" rounded size='large' src='../images/blockParty-home.png' alt='blockparty image' />
                    </Grid.Column>
                    <Grid.Column textAlign="left" verticalAlign="middle">
                        <div className="pt-20"></div>
                        <h3 className="font">Block Party</h3>
                        <p>Connecting you with your local community</p>
                        <p>Bcrypt JS, Express EJS Layouts, Javascript, Materialize, Node.js, Passport, SQL, Sequelize</p>
                        <div className="pt-10"></div>
                        <a href="#" className="proj-btn bp-btn">Preview</a>
                        <a href="https://block-party206.herokuapp.com/" className="proj-btn bp-btn">Visit Site</a>
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