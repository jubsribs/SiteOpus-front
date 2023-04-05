import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cadastro, Home, Login } from '../screens';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cadastro' element={<Cadastro />} />
    </Routes>
  );
};
