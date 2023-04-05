import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, Login } from '../screens';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/home'} />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};
