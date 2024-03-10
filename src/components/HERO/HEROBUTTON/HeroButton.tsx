// HeroButton.tsx
import React from 'react';

interface HeroButtonProps {
  label: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({ label }) => {
  return (
    <button style={{
      background: 'hsl(120, 75%, 3%)',
      borderColor: 'hsla(180,75%,50%,0.5)',
      margin: '5px',
      textShadow: '0 0 5px hsla(180,75%,50%,0.75)'
    }}>
      {label}
    </button>
  );
}

export default HeroButton;