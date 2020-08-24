import React from 'react';
import { Container, Grid } from 'semantic-ui-react'

const Home = () => {
    return (
        <Container className="f-vh">
            <Grid.Row className="pt-20">
            </Grid.Row>
            <Grid.Row >
                <Grid.Column><h1 className="hp-name">Royce Ubando</h1></Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column sm={4}></Grid.Column>
                <Grid.Row>
                    <Grid.Column sm={10}><h3 className="hp-title" >Full Stack Developer</h3></Grid.Column>
                </Grid.Row>
            </Grid.Row>
        </Container>

    )
}

export default Home