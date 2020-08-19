import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react'

const Projects = () => (
    <Container className="pad-5"> 
    <div id="projects" className="pad-5"></div>
    <Grid columns={2} stackable>
 
        <h1 className="bg-grey header-txt w-hunnit">Projects</h1>
        <Grid.Row>
            <Grid.Column className="spacing">
                <Image size='medium' src='../tastyRoots-home.png' alt='tastyroots image' />
            </Grid.Column>
            <Grid.Column className="spacing">
                <a href="https://tasty-roots-client.herokuapp.com/profile" target="_blank" className="link-clean"><h2 className="proj-title">Tasty Roots</h2></a>
                {/* <p className="description">Bcrypt JS, Express EJS Layouts, Javascript, Materialize, Node.js, Passport, SQL, Sequelize</p> */}
                <p className="description">A place to preserve family recipes.</p>
                <p className="description">Co-developed secure web application with Javascript and typescript.  Back-End built with express, Node.js.  Database built with MongoDb/Mongoose and used Redux for state management.  Front-End built with React and styled with Semantic UI React.</p>
            </Grid.Column>
            <Grid.Column className="spacing">
                <Image size='medium' src='../blockParty-home.png' alt='blockparty image' />
            </Grid.Column>
            <Grid.Column className="spacing">
                <a href="https://block-party206.herokuapp.com/" target="_blank" className="link-clean"><h2 className="proj-title">Block Party</h2></a>
                {/* <p className="description">Bcrypt JS, Express EJS Layouts, Javascript, Materialize, Node.js, Passport, SQL, Sequelize</p> */}
                <p className="description">Connecting you to your local community. </p>
                <p className="description">Web application built with Javascript.  Back-end built with Express, Node.js and secured with Bcrypt and passport.  Database handled with MongoDB/Mongoose.  Front-End built with Express EJS Layouts and styled with Materialize.</p>
            </Grid.Column>
            <Grid.Column className="spacing">
                <Image size='medium' src='../dodoSwap-home.png' />
            </Grid.Column>
            <Grid.Column className="spacing">
                <a href="http://dodoswap.herokuapp.com/" target="_blank"><h2 className="proj-title">Dodo Swap</h2></a>
                {/* <p className="description">Bcrypt, Express, Javascript, MongoDb, Mongoose, Node.js, React, Semantic-UI-React, Typescript</p> */}
                <p className="description">A place to arrange events to catalogue Animal Crossing items</p>
                <p className="description">Co-developed secure web application with Javascript and Typescript.  Database built with mongoDb/mongoose.  Built and styled front end with React and Semantic-UI-React.</p>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    </Container>
)


export default Projects