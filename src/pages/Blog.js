import React from 'react';
import { Card, Container, Grid, Image } from 'semantic-ui-react'

const Blog = props => {
    return (
        <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
        </Grid.Row>
    
        <Grid.Row>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}

export default Blog