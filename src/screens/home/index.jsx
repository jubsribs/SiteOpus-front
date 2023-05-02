import React, { useEffect, useState } from 'react';
import { auth, db } from '../../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { FaleConosco, Galeria, Welcome } from '../../components';

import './styles.scss';

export const Home = () => {
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
    <div className='opus-home'>
      <Welcome />
      <Galeria />
      <FaleConosco />
      <p> {loggeduser ? loggeduser[0].email : 'No data'}</p>
    </div>
  );
};
