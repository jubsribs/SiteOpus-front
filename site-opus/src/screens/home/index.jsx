import React from 'react';
import {
  FaleConosco,
  Galeria,
  Header,
  HeaderNavigation,
} from '../../components';
import { OpusLogo } from '../../assets/icons';
import './styles.scss';

export const Home = () => {
  return (
    <div>
      <Header />
      <HeaderNavigation />
      <div className='opus-home'>
        <OpusLogo />
      </div>

      <Galeria />
      <FaleConosco />
    </div>
  );
};
