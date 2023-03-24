import React from 'react';
import './styles.scss';
import { Opusbranco } from '../../assets/icons';

export const Welcome = () => {
  return (
    <div className='opus-home-body'>
      <div className='opus-home'>
        <div className='svg-logo'>
          <Opusbranco />
        </div>
      </div>
      <div className='vazio'></div>
    </div>
  );
};
