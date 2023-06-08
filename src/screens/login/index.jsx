import React, { useState } from 'react';
import './styles.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { toast } from 'react-toastify';
import Tooltip from '@mui/material/Tooltip';
import { LogoLogin } from '../../assets/icons/index';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        toast.success('Login Com Sucesso!');
        setEmail('');
        setSenha('');
        setErrorMsg('');
        setTimeout(() => {
          setSuccessMsg('');
          navigate('/');
        }, 500);
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === 'auth/invalid-email') {
          toast.error('Por favor, preencha todos os campos obrigatórios');
        }
        if (errorCode === 'auth/user-not-found') {
          toast.info('Email Incorreto');
        }
        if (errorCode === 'auth/wrong-password') {
          toast.info('Senha Incorreta');
        }
      });
  };

  return (
    <form>
      <div className='opus-login-body'>
        <div className='opus-login'>
          <div className='sub-title-body'>
            {successMsg && (
              <>
                <div>{successMsg}</div>
              </>
            )}
            {errorMsg && (
              <>
                <div>{errorMsg}</div>
              </>
            )}
            <LogoLogin />
            <h4 className='sub-title'>
              email{' '}
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>
            <input
              className='sub-title-box'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4 className='sub-title'>
              senha{' '}
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>
            <input
              className='sub-title-box'
              value={senha}
              type='password'
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <Button onClick={handleSignIn}> continuar</Button>
          <div className='opus-login-cadastro'>
            <h4>
              {' '}
              não tem cadastro?
              <NavLink className='nav-link' to='/cadastro'>
                cadastre-se
              </NavLink>
            </h4>
          </div>
        </div>
      </div>
    </form>
  );
};
