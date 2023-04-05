import React, { useState } from 'react';
import './styles.scss';
import TextField from '@mui/material/TextField';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { useSelector, useDispatch } from 'react-redux';
import {
  getFirestore,
  query,
  where,
  getDocs,
  collection,
} from 'firebase/firestore';

export const Login = () => {
  // console.log('estou-login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  async function logar() {
    let db = getFirestore();
    const userRef = collection(db, 'usuario');
    const q = query(userRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    let password = undefined;
    let privilege = undefined;
    let userID = undefined;
    querySnapshot.forEach((doc) => {
      userID = doc.id;
      password = doc.data().senha;
      privilege = doc.data().privilege;
    });
    if (password === senha) {
      dispatch({
        type: 'LOG_IN',
        usuarioEmail: email,
        usuarioPrivilege: privilege,
        usuarioID: userID,
      });
    } else {
      console.log('erro');
    }
  }
  return (
    <>
      {useSelector((state) => state.usuarioLogado) > 0 ? navigate('/') : null}
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
              onChange={handleEmailChange}
            />
            <h4 className='sub-title'> senha</h4>
            <TextField
              className='sub-title-box'
              multiline
              rows={1}
              value={senha}
              defaultValue=''
              onChange={handleSenhaChange}
            />
          </div>
          <Button onClick={logar}> continuar</Button>
          <div className='opus-login-cadastro'>
            <h4> não tem cadastro?</h4>
            <NavLink to='/cadastro'>cadastre-se</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
