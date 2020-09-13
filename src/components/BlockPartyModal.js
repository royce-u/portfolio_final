import React, { useState } from 'react';
import { Image, Modal } from 'semantic-ui-react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let BlockPartyModal = () => {
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
      trigger={<a className="proj-btn l-btn">Preview</a>}
      size="large"
    >
      <Modal.Content>
        <Slider {...settings}>
          <Image src="./images/blockParty-home.png" />
        </Slider>
      </Modal.Content>
      <Modal.Actions>
        <a className="proj-btn bp-btn1" onClick={() => setOpen(false)}>Back</a>
        <a href="https://block-party206.herokuapp.com/" className="proj-btn bp-btn2">Visit Site</a>
      </Modal.Actions>
    </Modal>

  )
}

export default BlockPartyModal;