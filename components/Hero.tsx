import React from 'react';
import CutCornerButton from './CutCornerButton';

const Hero = () => {
  return (
    <section>
      <div className='container'>
        <p>Intoducing Blockforge</p>
        <h1>The future of blockchain is here.</h1>
        <p>Lorem ipsum </p>
        <CutCornerButton title='Get started' />
      </div>
    </section>
  );
};

export default Hero;
