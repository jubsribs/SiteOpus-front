import React from 'react';
import './styles.scss';
import { PermIdentityOutlinedIcon } from '../../assets/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const navigate = useNavigate();
const location = useLocation();

export const ButtonLogin = () => {
  return (
    <button className='opus-button-login' onClick={() => navigate('/login')}>
      <span className='opus-button-title'> login</span>
      <PermIdentityOutlinedIcon />
    </button>
  );
};
