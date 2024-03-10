import React, { useState, useEffect, ReactNode } from 'react';

interface ScrollButtonProps {
  targetId: string;
  children: ReactNode;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ targetId, children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScreenWide, setIsScreenWide] = useState(window.innerWidth > 960);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenWide(window.innerWidth > 960);
    };

    window.addEventListener('resize', handleResize);

    // Run once on component mount to set initial state
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const target = document.getElementById(targetId);
      const targetPosition = target ? target.getBoundingClientRect() : null;
      const screenHeight = window.innerHeight;
      if (targetPosition && ((targetPosition.bottom+targetPosition.top)/2 < screenHeight) && targetPosition.bottom > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetId]);

  const scrollToTarget = () => {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ position: 'relative' }}>
      {isVisible && (
        <button
          onClick={scrollToTarget}
          style={{
            position: 'absolute',
            bottom: '10px', // Adjust as needed
            left: '50%', // Move to center of the container
            transform: 'translateX(-50%)', // Center precisely
            zIndex: 1000, // Ensure it floats above other content
            background: 'transparent', // Make the background transparent
            border: 'none', // Remove the border
            opacity: 0.8, 
            display: isScreenWide ? 'block' : 'none', // Hide if screen is not wide enough
          }}
        >
          {children}
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
