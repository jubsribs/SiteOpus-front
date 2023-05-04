import React from 'react';
import { InstagramIcon, OpusBranco } from '../../assets/icons';
import './styles.scss';

export const Footer = () => {
  return (
    <div className='opus-footer-body'>
      <footer className='opus-footer'>
        <div className='opus-footer-instagram'>
          <InstagramIcon /> @grupopus
        </div>
        <div className='opus-footer-email'>
          opusservicoeobras@gmail.com
          <OpusBranco />
        </div>
      </footer>
    </div>
  );
};
