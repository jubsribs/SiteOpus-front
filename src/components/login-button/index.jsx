import React from 'react';
import './styles.scss';
import { PermIdentityOutlinedIcon } from '../../assets/icons';

export const ButtonLogin = ({ onClick }) => {
  return (
    <div className='opus-button-body'>
      <button className='opus-button-login' onClick={onClick}>
        <div className='opus-button-login-body'>
          <PermIdentityOutlinedIcon />
          <h2 className='opus-button-title'> login</h2>
        </div>
      </button>
    </div>
  );
};
