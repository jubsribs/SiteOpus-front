import React, { useState } from 'react';
import './styles.scss';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import { Button } from '../../components/button';
import { firebase } from '../../config/firebase';
// import 'firebase/app';
// import firebase from 'firebase/app';
import 'firebase/auth';

export const Login = () => {
  // console.log('estou-login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const newLogin = (e) => {
    e.preventDefault();
    firebase.auth().signinWithEmailAndPassword(email, senha);
  };
  return (
    <>
      <div className='opus-login-body'>
        <div className='opus-login'>
          <div className='sub-title-body'>
            <h4 className='sub-title'> email</h4>
            <TextField
              className='sub-title-box'
              multiline
              rows={1}
              value={email}
              defaultValue=''
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4 className='sub-title'> senha</h4>
            <TextField
              className='sub-title-box'
              multiline
              rows={1}
              value={senha}
              defaultValue=''
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <Button onClick={newLogin}> continuar</Button>
          <div className='opus-login-cadastro'>
            <h4> não tem cadastro?</h4>
            <NavLink to='/cadastro'>cadastre-se</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
