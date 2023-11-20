import ForgotPassword from '@domain/auth/pages/ForgotPassword';
import SignUp from '@domain/auth/pages/SignUp';
import BlogRoutes from '@domain/blog/routes/BlogRoutes';
import ProjectsRoutes from '@domain/projects/routes/ProjectsRoutes';
import Home from '@pages/Home';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

// This file is used to organize the routes of the application
const AppPagesRoutes: FC = (): ReactElement => {
  return (
    <div className="flex h-full w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/*" element={<BlogRoutes />} />
        <Route path="/projects/*" element={<ProjectsRoutes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppPagesRoutes;
