import React from 'react';
import { Footer, Header, HeaderNavigation } from '../components';
import './styles.scss';

export const Layout = ({ children }) => {
  return (
    <>
      {children}
      {/* <Header /> */}
      {/* <HeaderNavigation /> */}
      <Footer />
    </>
  );
};
