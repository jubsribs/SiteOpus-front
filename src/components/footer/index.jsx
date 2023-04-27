import React from 'react';
import { InstagramIcon, OpusBranco } from '../../assets/icons';
import { NavLink } from 'react-router-dom';
import './styles.scss';

export const Footer = () => {
  return (
    <div className='opus-footer-body'>
      <footer className='opus-footer'>
        <div className='opus-footer-instagram'>
          <InstagramIcon /> @grupopus
        </div>
        <div className='opus-footer-header'>
          <NavLink className='nav-link' to='/'>
            home
          </NavLink>
          <NavLink className='nav-link' to='/login'>
            login
          </NavLink>
        </div>
        <div className='opus-footer-email'>
          opusservicoeobras@gmail.com
          <OpusBranco />
        </div>
      </footer>
    </div>
  );
};
