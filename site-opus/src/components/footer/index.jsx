import React from 'react';
import { InstagramIcon, Opusbranco } from '../../assets/icons';
import './styles.scss';

export const Footer = () => {
  return (
    <div className='opus-footer'>
      <footer className='opus-footer'>
        <div className='instagram'>
          <InstagramIcon /> @grupopus
        </div>
        <div className='email'>
          opusservicoeobras@gmail.com
          <Opusbranco />
        </div>
      </footer>
    </div>
  );
};
