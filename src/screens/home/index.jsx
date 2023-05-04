import React from 'react';
import { FaleConosco, Galeria } from '../../components';
import './styles.scss';

export const Home = () => {
  return (
    <div className='opus-home'>
      <Galeria />
      <FaleConosco />
    </div>
  );
};
