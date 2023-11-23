import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';
import SignUp from '../pages/SignUp';

const AuthPagesRoutes: FC = (): ReactElement => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AuthPagesRoutes;
