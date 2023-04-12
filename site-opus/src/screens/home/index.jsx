import React from 'react';
import { FaleConosco, Galeria, Welcome } from '../../components';

import './styles.scss';

export const Home = () => {
  return (
    <div className='opus-home'>
      <Welcome />
      <Galeria />
      <FaleConosco />
    </div>
  );
};
