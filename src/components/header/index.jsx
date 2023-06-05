import React, { useEffect, useState } from 'react';
import { auth, db } from '../../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { PerfilDoador, PerfilDonatario } from '../../screens';
import { OpusBranco } from '../../assets/icons';
import { useNavigate, NavLink } from 'react-router-dom';
import './styles.scss';

export const Header = ({ acao }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');

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
    if (user?.type === 'doador') {
      return <PerfilDoador onClick={handleLogout} />;
    } else {
      return <PerfilDonatario onClick={handleLogout} />;
    }
  }
  return (
    <div className='opus-header-body'>
      <header className={acao ? 'ativaCor' : 'opus-header'}>
        <div className='svg-logo'>
          <OpusBranco />
        </div>
        <div className='opus-header-button'>
          <div className='opus-header-navLink'>
            <NavLink className='nav-link' to='/'>
              home
            </NavLink>
            <NavLink className='nav-link' to='/doacao'>
              doação
            </NavLink>
          </div>

          {!loggeduser ? (
            <>
              <div className='opus-header-navLink'>
                <NavLink className='nav-link' to='/login'>
                  login
                </NavLink>
              </div>
            </>
          ) : (
            perfil()
          )}
        </div>
      </header>
    </div>
  );
};
