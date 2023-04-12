import React from 'react';
import { OpusLogo, OpusTitle } from '../../assets/icons';
import './styles.scss';

export const Header = () => {
  return (
    <div className='opus-header'>
      <header className='opus-header'>
        <div className='opus-logo'>
          <OpusLogo />
        </div>
        <OpusTitle className='title' />
      </header>
    </div>
  );
};
