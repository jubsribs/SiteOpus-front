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
  Doacao,
  Notes,
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
      <Route path='/doacao' element={<Doacao />} />
      <Route path='/notes' element={<Notes />} />
    </Routes>
  );
};
