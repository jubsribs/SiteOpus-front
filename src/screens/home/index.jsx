import React from 'react';
import { Banner, FaleConosco, Galeria } from '../../components';
import './styles.scss';

export const Home = () => {
  return (
    <div className='opus-home'>
      <Banner />
      <Galeria />
      <FaleConosco />
    </div>
  );
};
