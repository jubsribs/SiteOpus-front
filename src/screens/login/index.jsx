import React, { useState } from 'react';
import './styles.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { ErrorIcon, logoLogin, TaskAltIcon } from '../../assets/icons/index';
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
        setSuccessMsg('Login Com Sucesso!');
        setEmail('');
        setSenha('');
        setErrorMsg('');
        setTimeout(() => {
          setSuccessMsg('');
          navigate('/');
        }, 3000);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (error.message === 'Firebase: Error (auth/invalid-email).') {
          setErrorMsg('Por favor, preencha todos os campos obrigatórios');
        }
        if (error.message === 'Firebase: Error (auth/user-not-found).') {
          setErrorMsg('Email Incorreto');
        }
        if (error.message === 'Firebase: Error (auth/wrong-password).') {
          setErrorMsg('Senha Incorreta');
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
                <div className='image-body'>
                  <div className='sucess-msg'>{successMsg}</div>
                  <TaskAltIcon fontSize='large' />
                </div>
              </>
            )}
            {errorMsg && (
              <>
                <div className='image-body'>
                  <div className='error-msg'>{errorMsg}</div>
                  <ErrorIcon fontSize='large' />
                </div>
              </>
            )}
            <logoLogin />
            <h4 className='sub-title'> email</h4>
            <input
              className='sub-title-box'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4 className='sub-title'> senha</h4>
            <input
              className='sub-title-box'
              value={senha}
              type='password'
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
    </form>
  );
};
