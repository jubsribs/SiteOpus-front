import React from 'react';
import { OpusLogo } from '../../assets/icons';
import './styles.scss';

export const Header = () => {
  return (
    <div className='opus-header'>
      <header className='opus-header'>
        <div className='opus-logo'>
          <OpusLogo />
        </div>
        <h3 className='title'>OPUS</h3>
      </header>
    </div>
  );
};
