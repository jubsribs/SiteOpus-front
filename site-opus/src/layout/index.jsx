import React from 'react';
import { Footer, Header, HeaderNavigation } from '../components';
import './styles.scss';
import { Home } from '../screens';

export const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <HeaderNavigation /> */}
      <Home />
      <Footer />
    </>
  );
};
