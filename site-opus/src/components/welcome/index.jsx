import React from 'react';
import './styles.scss';
import { Opusbranco } from '../../assets/icons';
import { ButtonLogin } from '../login-button';

export const Welcome = () => {
  return (
    <div className='opus-home-body'>
      <div className='opus-home'>
        <div className='svg-logo'>
          <Opusbranco />
        </div>
        <div className='opus-home-button'>
          <ButtonLogin />
        </div>
      </div>
      <div className='vazio'></div>
    </div>
  );
};
