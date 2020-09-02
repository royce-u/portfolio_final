import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react'

const Home = () => {
    return (
        <Container className="f-vh hero-image" id="home">
            <Grid height="100%">
                <div className="pt-20"></div>
                <Grid.Row textAlign="right">
                    <Grid.Column><Header className="hp-name">Royce Ubando</Header>
                        <h3 className="hp-title" >Full Stack Developer</h3>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>

    )
}

export default Home