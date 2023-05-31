import React from 'react';
import { About, Banner, FaleConosco, Galeria } from '../../components';
import './styles.scss';

export const Home = () => {
  return (
    <div className='opus-home'>
      <Banner />
      <About />
      <Galeria />
      <FaleConosco />
    </div>
  );
};
