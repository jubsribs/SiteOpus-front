import React, { useState, useEffect } from 'react';
import { Footer, Header } from '../components';
import './styles.scss';

export const Layout = ({ children }) => {
  const [ativaCor, setAtivaCor] = useState(false);

  useEffect(function () {
    function posicaoScroll() {
      if (window.scrollY > 10) {
        setAtivaCor(true);
      } else {
        setAtivaCor(false);
      }
    }
    window.addEventListener('scroll', posicaoScroll);
  }, []);
  return (
    <>
      <Header acao={ativaCor} />
      {children}
      <Footer />
    </>
  );
};
