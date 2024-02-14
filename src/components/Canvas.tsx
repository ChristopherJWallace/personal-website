import React, { useEffect, useRef } from 'react';

// Constants for the animation
const TO_RAD = Math.PI / 180;
const TAU = 2 * Math.PI;
const HALF_PI = Math.PI / 2;
const pipeCount = 10;
const pipePropCount = 8;
const pipePropsLength = pipeCount * pipePropCount;
const turnCount = 8;
const turnAmount = (360 / turnCount) * TO_RAD;
const turnChanceRange = 100;
const xturnChance = 101;
const yturnChance = 50;
const baseSpeed = 0.9; // pipe speed
const rangeSpeed = 0.1;
const baseTTL = 1000; // pipe length
const rangeTTL = 500; // +/- value
const baseWidth = 2; // pipe diameter
const rangeWidth = 4;
const baseHue = 120; // 0 (red) - 120 (green) - 240 (blue) - 360 (red)
const rangeHue = 120; // Dictates range of colors 0-360
const pipeOpacity = 0.05; // Dictates the opacity of lines (0: no lines, 1: 50% opacity)
const refreshRate = 20000; // Number of frames after which to refresh


const CanvasAnimation: React.FC = () => {
  const canvasRefDisplay = useRef<HTMLCanvasElement>(null); // Canvas for display
  const canvasRefOffscreen = useRef<HTMLCanvasElement>(null); // Off-screen canvas for drawing
  const tickRef = useRef(0);
  const pipePropsRef = useRef<Float32Array>(new Float32Array(pipePropsLength));

  // Helper functions
  const rand = (max: number, min: number = 0) => Math.random() * (max - min) + min;
  const fadeInOut = (life: number, ttl: number) => {
    const half = ttl / 2;
    return life <= half ? life / half : 1 - (life - half) / half;
  };

  useEffect(() => {
    const canvasDisplay = canvasRefDisplay.current;
    const canvasOffscreen = canvasRefOffscreen.current;
    const ctxDisplay = canvasDisplay?.getContext('2d');
    const ctxOffscreen = canvasOffscreen?.getContext('2d');
    if (!canvasDisplay || !ctxDisplay || !canvasOffscreen || !ctxOffscreen) return;


    const resize = () => {
      // Set canvas sizes here!
      [canvasDisplay, canvasOffscreen].forEach(canvas => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 3/4;
      });
    };

    // Assigns a range of property values to various pipes
    const initPipe = (i: number) => {
      const canvasOffscreen = canvasRefOffscreen.current;
      if (!canvasOffscreen) return;
    
      const canvasWidth = canvasOffscreen.width;
      const canvasHeight = canvasOffscreen.height;
    
      // Define pipe properties
      let x = rand(canvasWidth);
      let y = rand(canvasHeight/2, canvasHeight/2);
      let direction = rand(1) > 0.5 ? HALF_PI : TAU - HALF_PI;
      let speed = baseSpeed + rand(rangeSpeed);
      let life = 0;
      let ttl = baseTTL + rand(rangeTTL, -rangeTTL);
      let width = baseWidth + rand(rangeWidth);
      let hue = baseHue + rand(rangeHue);
    
      // Store pipe properties in the array
      pipePropsRef.current.set([x, y, direction, speed, life, ttl, width, hue], i);
    };
    const initPipes = () => {
      for (let i = 0; i < pipePropsLength; i += pipePropCount) {
        initPipe(i);
      }
    };

    // Version A: Creates the pipe illustrations
    // const drawPipe = (x: number, y: number, life: number, ttl: number, width: number, hue: number) => {
    //   ctxOffscreen.save();
    //   ctxOffscreen.strokeStyle = `hsla(${hue},75%,50%,${fadeInOut(life, ttl) * pipeOpacity})`;
    //   ctxOffscreen.shadowColor = `hsla(${hue}, 100%, 50%, 1)`; // Use a bright color for a strong glow
    //   ctxOffscreen.beginPath();
    //   ctxOffscreen.arc(x, y, width, 0, TAU);
    //   ctxOffscreen.stroke();
    //   ctxOffscreen.closePath();
    //   ctxOffscreen.restore();
    // };

    // Version B: Creates the pipe illustrations
    const drawPipe = (x: number, y: number, life: number, ttl: number, width: number, hue: number) => {
      const canvasOffscreen = canvasRefOffscreen.current;
      if (!canvasOffscreen) return;
    
      const canvasHeight = canvasOffscreen.height;
    
      // Calculate fade out factor based on y position
      // The closer the y position to the canvas bottom, the greater the fadeFactor
      const fadeStart = 0.8; // Start fading at 80% of the canvas height
      const fadeEnd = 1; // Completely faded at 100% of the canvas height
      const fadeRange = canvasHeight * (fadeEnd - fadeStart);
      const fadeFactor = Math.max(0, Math.min((y - fadeStart * canvasHeight) / fadeRange, 1));
    
      // Adjust opacity based on fadeFactor
      const opacity = (1 - fadeFactor) * fadeInOut(life, ttl) * pipeOpacity;
    
      ctxOffscreen.save();
      ctxOffscreen.strokeStyle = `hsla(${hue},75%,50%,${opacity})`;
      ctxOffscreen.shadowColor = `hsla(${hue}, 100%, 50%, ${opacity})`; // Adjust shadow opacity as well
      ctxOffscreen.beginPath();
      ctxOffscreen.arc(x, y, width, 0, TAU);
      ctxOffscreen.stroke();
      ctxOffscreen.closePath();
      ctxOffscreen.restore();
    };
    
    const updatePipe = (i: number) => {
      const canvasOffscreen = canvasRefOffscreen.current;
      if (!canvasOffscreen) return;
    
      const canvasWidth = canvasOffscreen.width;
      const canvasHeight = canvasOffscreen.height;
    
      let i2 = 1 + i, i3 = 2 + i, i4 = 3 + i, i5 = 4 + i, i6 = 5 + i, i7 = 6 + i, i8 = 7 + i;
      let x, y, direction, speed, life, ttl, width, hue;
    
      x = pipePropsRef.current[i];
      y = pipePropsRef.current[i2];
      direction = pipePropsRef.current[i3];
      speed = pipePropsRef.current[i4];
      life = pipePropsRef.current[i5];
      ttl = pipePropsRef.current[i6];
      width = pipePropsRef.current[i7];
      hue = pipePropsRef.current[i8];
    
      // Update the pipe properties based on their speed and direction
      life++;
      x += Math.cos(direction) * speed;
      y += Math.sin(direction) * speed;
    
      // Change direction at random intervals and at certain positions
      direction += !(tickRef.current % Math.round(rand(turnChanceRange))) && (Math.round(x) % xturnChance === 0 || Math.round(y) % yturnChance === 0) ? turnAmount * (Math.round(rand(1)) ? 1 : -1) : 0;
    
      // Wrap the pipe around the canvas edges
      if (x > canvasWidth+width) x = 0;
      else if (x < 0-width) x = canvasWidth;
      if (y > canvasHeight+width) y = 0;
      else if (y < 0-width) y = canvasHeight;
    
      // Update the properties in the array
      pipePropsRef.current.set([x, y, direction, speed, life, ttl, width, hue], i);
    
      // Reinitialize the pipe if its life exceeds its ttl
      if (life > ttl) {
        initPipe(i);
      }
    
      // Draw the pipe on the off-screen canvas
      drawPipe(x, y, life, ttl, width, hue);
    };    

    const updatePipes = () => {
      tickRef.current++;
      console.log(tickRef.current);
    
      // Refresh logic
      if (tickRef.current % refreshRate === 0) {
        // Perform null check before accessing 'current'
        if (canvasRefOffscreen.current) {
          const ctxOffscreen = canvasRefOffscreen.current.getContext('2d');
          if (ctxOffscreen) {
            // Safely clear the off-screen canvas
            ctxOffscreen.clearRect(0, 0, canvasRefOffscreen.current.width, canvasRefOffscreen.current.height);
          }
          initPipes(); // Reinitialize pipes
          tickRef.current = 0; // Reset tick counter to ensure consistent refresh intervals
        }
      }
    
      // Existing logic to update each pipe
      for (let i = 0; i < pipePropsLength; i += pipePropCount) {
        updatePipe(i);
      }
    };

    const render = () => {
      ctxDisplay.clearRect(0, 0, canvasDisplay.width, canvasDisplay.height);
      ctxDisplay.drawImage(canvasOffscreen, 0, 0); // Draw the off-screen canvas onto the display canvas

      ctxDisplay.save();
      ctxDisplay.filter = 'blur(12px)'; // Adjust the blur value as needed
      ctxDisplay.drawImage(canvasOffscreen, 0, 0);
      ctxDisplay.restore();
      
      // Draw the off-screen canvas onto the display canvas without the blur effect
      ctxDisplay.save();
      ctxDisplay.drawImage(canvasOffscreen, 0, 0);
      ctxDisplay.restore();

      updatePipes();
    };

    const draw = () => {
      render();
      requestAnimationFrame(draw);
    };

    resize();
    initPipes();
    draw();

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <>
      <canvas ref={canvasRefDisplay} style={{ display: 'block', width: '100%', height: '100%' }} />
      <canvas ref={canvasRefOffscreen} style={{ display: 'none' }} /> {/* Off-screen canvas is not displayed */}
    </>
  );
};

export default CanvasAnimation;
