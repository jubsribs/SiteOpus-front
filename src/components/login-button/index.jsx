import React from 'react';
import './styles.scss';
import { PermIdentityOutlinedIcon } from '../../assets/icons';

export const ButtonLogin = ({ onClick }) => {
  return (
    <button className='opus-button-login' onClick={onClick}>
      <span className='opus-button-title'> login</span>
      <PermIdentityOutlinedIcon />
    </button>
  );
};
