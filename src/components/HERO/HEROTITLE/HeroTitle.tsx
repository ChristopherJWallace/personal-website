import React from 'react';
import './HeroTitle.css';

interface HeroTitleProps {
  label: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ label }) => {
  return (
    <>
      <h1 className='hero-title'> {label} </h1>
    </>
  );
}

export default HeroTitle;