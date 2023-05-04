import React from 'react';
import { Footer, Header } from '../components';
import './styles.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
