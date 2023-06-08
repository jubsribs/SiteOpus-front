import React from 'react';
import { InstagramIcon, OpusBranco } from '../../assets/icons';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './styles.scss';

export const Footer = () => {
  return (
    <div className='opus-footer-body'>
      <footer className='opus-footer'>
        <div className='opus-footer-redes'>
          <a href='https://www.instagram.com/grupopus/'>
            <InstagramIcon />
          </a>
          <a href='mailto:opusservicoeobras@gmail.com'>
            <MailOutlineIcon />
          </a>
        </div>
        <h6> © 2023 Todos os direitos reservados.</h6>
        <div className='opus-footer-email'>
          <OpusBranco />
        </div>
      </footer>
    </div>
  );
};
