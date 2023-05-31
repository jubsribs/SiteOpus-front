import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  AddDonation,
  Cadastro,
  DataAccount,
  Home,
  Login,
  PerfilDonatario,
  FamilyDonation,
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
      <Route path='/familias' element={<FamilyDonation />} />
    </Routes>
  );
};
