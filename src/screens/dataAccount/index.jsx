import React, { useState, useEffect } from 'react';
import { auth, db } from '../../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { Button } from '../../components/button';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export const DataAccount = () => {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  function GetCurrentUser() {
    useEffect(() => {
      auth.onAuthStateChanged((userlogged) => {
        if (userlogged) {
          const getUsers = async () => {
            const q = query(
              collection(db, 'users'),
              where('uid', '==', userlogged.uid),
            );
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0]);
          };
          getUsers();
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }
  const loggeduser = GetCurrentUser();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className='opus-data-account-body'>
      <h1 className='title'> detalhes da sua conta</h1>
      {loggeduser ? (
        <table>
          <tbody>
            <tr>
              <td> nome</td>
              <th> {loggeduser.username}</th>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td> email</td>
              <th> {loggeduser.email}</th>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td> telefone</td>
              <th> {loggeduser.telefone}</th>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td> Seu endereço</td>
              <th>
                {loggeduser.logradouro} - {loggeduser.complemento}
              </th>
            </tr>
          </tbody>
        </table>
      ) : (
        <h2 className='title'>Você não está logado!</h2>
      )}
      <div className='button'>
        <Button onClick={handleClick}> voltar</Button>
      </div>
    </div>
  );
};
