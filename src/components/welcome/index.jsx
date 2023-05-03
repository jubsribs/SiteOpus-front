import React, { useEffect, useState } from 'react';
import { auth, db } from '../../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { PerfilDoador, PerfilDonatario } from '../../screens';
import { OpusBranco } from '../../assets/icons';
import { ButtonLogin } from '../login-button';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export const Welcome = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  let response;
  const usersCollectionRef = collection(db, 'users');
  const handleClick = () => {
    navigate('/login');
  };

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
  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/login');
    });
  };
  function perfil() {
    console.log('fui chamado');
    console.log(user?.type);
    if (user?.type === 'doador') {
      <PerfilDoador onClick={handleLogout} />;
    } else {
      <PerfilDonatario onClick={handleLogout} />;
    }
  }
  return (
    <div className='opus-home-body'>
      <div className='opus-home'>
        <div className='svg-logo'>
          <OpusBranco />
          <h2>Site solidário em prol dos que precisam</h2>
        </div>
        <div className='opus-home-button'>
          {!loggeduser && (
            <nav>
              <ButtonLogin onClick={handleClick} />
            </nav>
          )}
          {loggeduser && (
            <nav>
              <PerfilDoador onClick={handleLogout} />
            </nav>
          )}
        </div>
      </div>
      <div className='vazio'></div>
    </div>
  );
};
