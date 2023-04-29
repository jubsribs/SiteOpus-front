import React from 'react';
import { FaleConosco, Galeria, Welcome, addDonation } from '../../components';

import './styles.scss';

export const Home = () => {
  return (
    <div className='opus-home'>
      <Welcome />
      <Galeria />
      <FaleConosco />
      <addDonation />
    </div>
  );
};
