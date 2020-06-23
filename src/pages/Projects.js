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
        <h1 id="projects" className="header-top">Projects</h1>
    <Grid columns={2} stackable>
        <Grid.Row>
            <Grid.Column className="spacing">
                <Image size='medium' src='../tastyRoots-home.png' alt='tastyroots image' />
            </Grid.Column>
            <Grid.Column className="spacing">
                <h2>Tasty Roots</h2>
                <p className="description">Tech: Bcrypt JS, Express EJS Layouts, Javascript, Materialize, Node.js, Passport, SQL, Sequelize</p>
                <p className="description">A place to preserve family recipes.</p>
            </Grid.Column>
            <Grid.Column className="spacing">
                <Image size='medium' src='../blockParty-home.png' alt='blockparty image' />
            </Grid.Column>
            <Grid.Column className="spacing">
                <h2>Block Party</h2>
                <p>Tech: Bcrypt JS, Express EJS Layouts, Javascript, Materialize, Node.js, Passport, SQL, Sequelize</p>
                <p>Connecting you to your local community.  Use the 'Peoples' tab to educate yourself on the different cultures in your area, whether it be finding a tutor when learning a new language or trading ethnic dishes from different cultures.  Keep your neighborhood safe by submitting new or verifying current incident reports.  Help the local shopkeeper stay open by posting promotional content. </p>
            </Grid.Column>
            <Grid.Column className="spacing">
                <Image size='medium' src='../dodoSwap-home.png' />
            </Grid.Column>
            <Grid.Column className="spacing">
                <h2>Dodo Swap</h2>
                <p>Tech: Bcrypt, Express, Javascript, MongoDb, Mongoose, Node.js, React, Semantic-UI-React, Typescript</p>
                <p></p>
            </Grid.Column>
            <Grid.Column className="spacing">
                <Image size='medium' src='../spanish21Logo.png' />
            </Grid.Column>
            <Grid.Column>
                <h2>Spanish 21</h2>
                <p>Tech: Bcrypt, Express, Javascript, MongoDb, Mongoose, Node.js, React, Semantic-UI-React, Typescript</p>
                <p></p>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    </Container>
)


export default Projects