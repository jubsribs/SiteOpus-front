import React from 'react';
import './styles.scss';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
// import { logoLogin } from '../../assets/icons';
import { Button } from '../../components/button';

export const Login = () => {
  return (
    <div className='opus-login-body'>
      <div className='opus-login'>
        <div className='sub-title-body'>
          <h4 className='sub-title'> email</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
          />
          <h4 className='sub-title'> senha</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
          />
        </div>
        <Button> continuar</Button>
        <div className='opus-login-cadastro'>
          <h4> não tem cadastro?</h4>
          <NavLink>cadastre-se</NavLink>
        </div>
      </div>
    </div>
  );
};
