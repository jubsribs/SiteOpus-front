import React from 'react';
import './styles.scss';
import { Opusbranco } from '../../assets/icons';
import { ButtonLogin } from '../login-button';
import { useNavigate } from 'react-router-dom';

export const Welcome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
    console.log('chamei-login');
  };

  return (
    <div className='opus-home-body'>
      <div className='opus-home'>
        <div className='svg-logo'>
          <Opusbranco />
        </div>
        <div className='opus-home-button'>
          <ButtonLogin onClick={handleClick} />
        </div>
      </div>
      <div className='vazio'></div>
    </div>
  );
};
