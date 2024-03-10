import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
import CanvasAnimation from "../components/Canvas"
import HeroTitle from '../components/HERO/HEROTITLE/HeroTitle';
import {HeroCarousel} from "../components/HERO/HEROCAROUSEL/HeroCarousel"
import HeroButton from '../components/HERO/HEROBUTTON/HeroButton'
import '../App.scss'


export function Home() {

  return (

    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div style={{ backgroundColor: 'rgb(2, 7, 6)'}}><CanvasAnimation /> </div>
      
      <div style={{
        position: 'absolute',
        top: '37.5vh', // Positions the text at 3/8 of the screen's height
        left: '50%', // Centers the text horizontally
        transform: 'translate(-50%, -50%)', // Adjusts the positioning to center the text within the div
        color: 'white', // Change the color as needed
        zIndex: 10, // Ensures the text is above the canvas
        textAlign: 'center', // Centers the text within the div
        // textShadow: '0 0 5px hsla(180,75%,50%,0.75)',
        textShadow: '0 0 20px black',
        fontFamily: 'Exo 2',
      }}>



        {/* <div>
          <h1>Christopher J. Wallace</h1>
        </div> */}
        <HeroTitle label="Christopher J. Wallace"/>

        {/* Slideshow starts here */}
        <div>
        <HeroCarousel/>
        </div>
        {/* Slideshow ends here */}
        
        <div style={{ marginTop: '20px' }}>
          <HeroButton label="ABOUT ME" />
          <HeroButton label="RESUME" />
          <HeroButton label="BLOG" />
        </div>
      
      </div>

      {/* Position the h2 elements below the canvas or as needed */}
      <div style={{ marginTop: '100vh' }}> {/* Adjust marginTop to position the h2 elements below the canvas */}
        <h2>This is the home page</h2>
      </div>
    </div>
  );
}
