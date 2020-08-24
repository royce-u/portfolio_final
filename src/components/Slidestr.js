import React from 'react';
import { CarouselProvider, Dot, Image, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


let Slidestr = () => {
    return (

        <CarouselProvider
            naturalSlideWidth={1}
            naturalSlideHeight={1}
            totalSlides={3}
        >
            <Slider className="fw">
                <Slide index={0}>
                    <Image src="./images/tastyRoots-home.png" />
                </Slide>
                <Slide index={1}>
                    <Image className="proj-img" src="./images/tastyRoots-familyCircles.png" />
                </Slide>
                <Slide index={2}>
                    <Image className="proj-img" src="./images/tastyRoots-recipes.png" />
                </Slide>
            </Slider>
            <DotGroup>
                <Dot index={0} />
                <Dot index={1} />
                <Dot index={2} />
            </DotGroup>
        </CarouselProvider>

    )
}

export default Slidestr;