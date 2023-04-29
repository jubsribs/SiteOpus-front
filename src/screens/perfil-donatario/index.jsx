import React, { useEffect, useState } from 'react';
import { auth, db } from '../../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import './styles.scss';

export const PerfilDonatario = () => {
  const [user, setUser] = useState('');
  const usersCollectionRef = collection(db, 'users');

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
  return (
    <div className='opus-perfil-body'>
      <div className='opus-perfil'></div>
      {loggeduser ? (
        <div>
          <p> Detalhes da sua Conta</p>
          <div>
            <span> Seu Nome</span>
            <span> {loggeduser[0].username}</span>
          </div>

          <div>
            <span> Seu Email</span>
            <span> {loggeduser[0].email}</span>
          </div>

          <div>
            <span> Seu telefone</span>
            <span> {loggeduser[0].telefone}</span>
          </div>

          <div>
            <span> Seu endereço</span>
            <span> {loggeduser[0].logradouro}</span>
            <span> {loggeduser[0].complemento}</span>
          </div>
        </div>
      ) : (
        <div>Você não está logado!</div>
      )}
    </div>
  );
};
