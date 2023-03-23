import React from 'react';
import {
  FaleConosco,
  Footer,
  Header,
  HeaderNavigation,
} from '../../components';
import './styles.scss';

export const Home = () => {
  return (
    <div>
      <Header />
      <HeaderNavigation />
      <FaleConosco />
    </div>
  );
};
