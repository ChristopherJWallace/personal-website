import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Carousel } from 'react-bootstrap';
import './HeroCarousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCogs, faMicrochip} from '@fortawesome/free-solid-svg-icons';
 
export function HeroCarousel() {
  return (
    <Carousel slide> 
      <Carousel.Item>
        <h3>Software Engineer <FontAwesomeIcon icon={faCode} style={{ paddingLeft: "5px", color:'hsla(180,75%,50%,0.75)',  textShadow: '0 0 20px black'}}/></h3>
      </Carousel.Item>
      <Carousel.Item >
        <h3>B.S. in Mech. Eng. <FontAwesomeIcon icon={ faCogs} style={{ paddingLeft: "5px", color:'hsla(180,75%,50%,0.75)', textShadow: '0 0 20px black',}}/></h3>
      </Carousel.Item>
      <Carousel.Item>
        <h3>M.S. in Comp. Sci. <FontAwesomeIcon icon={faMicrochip} style={{ paddingLeft: "5px", color:'hsla(180,75%,50%,0.75)', textShadow: '0 0 20px black',}}/></h3>
      </Carousel.Item>
    </Carousel>
  );
}