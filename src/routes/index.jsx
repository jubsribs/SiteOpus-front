import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  AddDonation,
  Cadastro,
  DataAccount,
  Home,
  Login,
  PerfilDonatario,
} from '../screens';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cadastro' element={<Cadastro />} />
      <Route path='/perfil-donatario' element={<PerfilDonatario />} />
      <Route path='/dados-conta' element={<DataAccount />} />
      <Route path='/adicionar-necessidades' element={<AddDonation />} />
    </Routes>
  );
};
