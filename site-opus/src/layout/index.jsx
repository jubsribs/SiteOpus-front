import React from 'react';
import { Container } from '@mui/material';
import { Footer } from '../components';
import './styles.scss';
import { Home } from '../screens';

export const Layout = () => {
  return (
    <>
      <Home />
      <Container fixed style={{ background: 'white', minHeight: '100%' }}>
        <div className='Wrapper'></div>
      </Container>
      <Footer />
    </>
  );
};
