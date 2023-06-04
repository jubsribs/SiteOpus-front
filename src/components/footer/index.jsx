import React from 'react';
import { InstagramIcon, OpusBranco } from '../../assets/icons';
import './styles.scss';

export const Footer = () => {
  return (
    <div className='opus-footer-body'>
      <footer className='opus-footer'>
        <div className='opus-footer-instagram'>
          <a href='https://www.instagram.com/grupopus/'>
            <InstagramIcon /> @grupopus
          </a>
        </div>
        <div className='opus-footer-email'>
          <a href='mailto:opusservicoeobras@gmail.com'>
            opusservicoeobras@gmail.com
            <OpusBranco />
          </a>
        </div>
      </footer>
    </div>
  );
};
