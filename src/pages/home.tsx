import React from 'react';
import { Link } from "react-router-dom"
import CanvasAnimation from "../components/Canvas"

export function Home() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <CanvasAnimation />
      <div style={{
        position: 'absolute',
        top: '37.5vh', // Positions the text at 3/8 of the screen's height
        left: '50%', // Centers the text horizontally
        transform: 'translate(-50%, -50%)', // Adjusts the positioning to center the text within the div
        color: 'white', // Change the color as needed
        zIndex: 10, // Ensures the text is above the canvas
        textAlign: 'center', // Centers the text within the div
      }}>
        <h1>This is the home page</h1>
      </div>
      {/* Position the h2 elements below the canvas or as needed */}
      <div style={{ marginTop: '100vh' }}> {/* Adjust marginTop to position the h2 elements below the canvas */}
        <h2>This is the home page</h2>
        <h2>This is the home page</h2>
        <h2>This is the home page</h2>
        <h2>This is the home page</h2>
        <h2>This is the home page</h2>
        <h2>This is the home page</h2>
        <h2>This is the home page</h2>
        <h2>This is the home page</h2>
        <h2>This is the home page</h2>
      </div>
    </div>
  );
}
