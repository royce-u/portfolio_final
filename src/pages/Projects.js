import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react'

const Projects = () => (
    // if (!props.projectsData) {
    //     return null
    // }
    // let proj = props.projectsData.map((p, i) => {
    //     return (
    //         // <Card key={i} className="proj-card">
    //         //     <Card.Content header={<a href={p.link} style={{ display: "table-cell" }} target="_blank">{p.name}</a><span>{p.date}</span>}/>
    //         //     <Card.Subtitle className="mb-2 text-muted">{p.tech}</Card.Subtitle>
    //         //     <Card.Text>{p.description}</Card.Text>
    //         // </Card>
    //         <Grid.Column></Grid.Column>
    //         <Card>
    //             <Card.Header><a  href={p.link} className="card-title" style={{ display: "table-cell" }} target="_blank">{p.name}</a></Card.Header>
    //             <Card.Meta><span className="date">{p.date}</span></Card.Meta>
    //             <Card.Content>fuck</Card.Content>
    //         </Card>

    //     )
    // })
    <Container className="header-top"> 
    <div id="projects" className="header-top"></div>
    <Grid columns={2} stackable>
 
        <h1 className="bg-grey header-txt w-hunnit">Projects</h1>
        <Grid.Row>
            <Grid.Column className="spacing">
                <Image size='medium' src='../tastyRoots-home.png' alt='tastyroots image' />
            </Grid.Column>
            <Grid.Column className="spacing">
                <a href="https://tasty-roots-client.herokuapp.com/profile" target="_blank" className="link-clean"><h2 className="proj-title">Tasty Roots</h2></a>
                <p className="description">Tech: Bcrypt JS, Express EJS Layouts, Javascript, Materialize, Node.js, Passport, SQL, Sequelize</p>
                <p className="description">A place to preserve family recipes.  Create your family circle and invite loved ones to build up your family cook book.  Create recipes and choose what families you share them with or set privacy settings so your secret recipes stay secret.  Have a different take on an existing recipe?  Create a Twist Recipe.</p>
                <p className="description">Co-developed secure web application with Javascript and typescript.  Back-End built with express, Node.js.  Database built with MongoDb/Mongoose and used Redux for state management.  Front-End built with React and styled with Semantic UI React.</p>
            </Grid.Column>
            <Grid.Column className="spacing">
                <Image size='medium' src='../blockParty-home.png' alt='blockparty image' />
            </Grid.Column>
            <Grid.Column className="spacing">
                <a href="https://block-party206.herokuapp.com/" target="_blank" className="link-clean"><h2 className="proj-title">Block Party</h2></a>
                <p className="description">Tech: Bcrypt JS, Express EJS Layouts, Javascript, Materialize, Node.js, Passport, SQL, Sequelize</p>
                <p className="description">Connecting you to your local community.  Use the 'Peoples' tab to educate yourself on the different cultures in your area, whether it be finding a tutor when learning a new language or trading ethnic dishes from different cultures.  Keep your neighborhood safe by submitting new or verifying current incident reports.  Help the local shopkeeper stay open by posting promotional content. </p>
                <p className="description">Web application built with Javascript.  Back-end built with Express, Node.js and secured with Bcrypt and passport.  Database handled with MongoDB/Mongoose.  Front-End built with Express EJS Layouts and styled with Materialize.</p>
            </Grid.Column>
            <Grid.Column className="spacing">
                <Image size='medium' src='../dodoSwap-home.png' />
            </Grid.Column>
            <Grid.Column className="spacing">
                <a href="http://dodoswap.herokuapp.com/" target="_blank"><h2 className="proj-title">Dodo Swap</h2></a>
                <p className="description">Tech: Bcrypt, Express, Javascript, MongoDb, Mongoose, Node.js, React, Semantic-UI-React, Typescript</p>
                <p className="description">A place for Animal Crossing players to arrange meet-ups and catalogue items in the game.  Visit the Inventory page to add items to your Wist List or inventory.  Create events and specifiy what items you require and set a time and place as well as a max visitor capacity.</p>
                <p className="description">Co-developed secure web application with Javascript and Typescript.  Database built with mongoDb/mongoose.  Built and styled front end with React and Semantic-UI-React.</p>
            </Grid.Column>
            {/* <Grid.Column className="spacing">
                <Image size='medium' src='../spanish21Logo.png' />
            </Grid.Column>
            <Grid.Column>
                <h2>Spanish 21</h2>
                <p className="description">Tech: Bcrypt, Express, Javascript, MongoDb, Mongoose, Node.js, React, Semantic-UI-React, Typescript</p>
                <p className="description"></p>
            </Grid.Column> */}
        </Grid.Row>
    </Grid>
    </Container>
)


export default Projects