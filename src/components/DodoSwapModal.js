import React, { useState } from 'react';
import { Image, Modal } from 'semantic-ui-react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let DodoSwapModal = () => {
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
          <Image src="./images/dodoSwap-home.png" />
          <Image src="./images/dodoSwap-myEvents.png" />
          <Image src="./images/dodoSwap-myWish.png" />
          <Image src="./images/dodoSwap-myInv.png" />
          <Image src="./images/dodoSwap-allEvents.png" />
          <Image src="./images/dodoSwap-catalogue.png" />
        </Slider>
      </Modal.Content>
      <Modal.Actions>
        <a className="proj-btn" onClick={() => setOpen(false)}>Back</a>
        <a href="http://dodoswap.herokuapp.com/" className="proj-btn ds-btn">Visit Site</a>
      </Modal.Actions>
    </Modal>

  )
}

export default DodoSwapModal;