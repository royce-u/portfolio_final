import React, { useState } from 'react';
import { Button, Image, Modal } from 'semantic-ui-react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let TastyRootsModal = () => {
  const [open, setOpen] = useState(false)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<a className="proj-btn">Preview</a>}
      size="large"
    >
      <Modal.Content>
        <Slider {...settings}>
          <Image src="./images/tastyRoots-home.png" />
          <Image src="./images/tastyRoots-profile.png" />
          <Image src="./images/tastyRoots-recipes.png" />
          <Image src="./images/tastyRoots-recipeShow.png" />
          <Image src="./images/tastyRoots-familyCircles.png" />
          <Image src="./images/tastyRoots-familyShow.png" />
        </Slider>
      </Modal.Content>
      <Modal.Actions>
        <a className="proj-btn tr-btn1" onClick={() => setOpen(false)}>Back</a>
        <a href="https://tasty-roots-client.herokuapp.com/" className="proj-btn tr-btn2">Visit Site</a>
      </Modal.Actions>
    </Modal>

  )
}

export default TastyRootsModal;