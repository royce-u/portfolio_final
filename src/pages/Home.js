import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react'

const Home = () => {
    return (
        <div className="f-vh bg-def" id="home">
            <Grid columns={2} stackable>
                <Grid.Row>
                    <div className="pt-10"></div>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={5} verticalAlign="middle">
                        <Image size="medium" src="../images/logoClear.png" />
                    </Grid.Column>
                    <Grid.Column width={5} verticalAlign="middle">
                        <h1 className="hp-title">ROYCE UBANDO</h1>
                        <h2 className="hp-title">Full Stack Developer</h2>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>

    )
}

export default Home