import React, { useState, useEffect } from 'react';
import { auth, db } from '../../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { Button } from '../../components/button';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export const DataAccount = () => {
  const [user, setUser] = useState('');
  const usersCollectionRef = collection(db, 'users');
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
            console.log(q);
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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

  const handleSair = () => {
    navigate('/');
  };

  return (
    <div className='opus-data-account-body'>
      {loggeduser ? (
        <table frame='hsides'>
          <thead>
            <tr>
              <th> detalhes da sua conta</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td> seu nome</td>
              <td> {loggeduser[0].username}</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td> seu email</td>
              <td> {loggeduser[0].email}</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td> seu telefone</td>
              <td> {loggeduser[0].telefone}</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td> Seu endereço</td>
              <td> {loggeduser[0].logradouro}</td>
              <td> complemento: {loggeduser[0].complemento}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h2>Você não está logado!</h2>
      )}
      <Button onClick={handleSair}> sair </Button>
    </div>
  );
};
