import React, {useState} from 'react';
import { Button, Container, Image, Modal } from 'semantic-ui-react'

import Slidestr from './Slidestr';

let Example = () => {
    const [open, setOpen] = useState(false)
    return (
        
          <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="large"
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Tasty Roots</Modal.Header>
      <Modal.Content image>
        {/* <Image size='medium' src='./images/tastyRoots-home.png' wrapped /> */}
        <Slidestr/>
      </Modal.Content>
    </Modal>
      
    )
}

export default Example;