import React, { useState } from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { Button } from '../../components/button';
import { auth } from '../../config/firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Login = () => {
  // console.log('estou-login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, senha);
  }

  if (loading) {
    return (
      <Box sx={{ display: 'flex', color: 'grey.500' }}>
        <CircularProgress color='inherit' />
      </Box>
    );
  }

  if (user) {
    return console.log(user);
  }

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
              type='password'
              defaultValue=''
              placeholder='************'
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <Button onClick={handleSignIn}> continuar</Button>
          <div className='opus-login-cadastro'>
            <h4> não tem cadastro?</h4>
            <NavLink to='/cadastro'>cadastre-se</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
