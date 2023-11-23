import AuthPagesRoutes from '@domain/auth/routes/AuthPagesRoutes';
import BlogRoutes from '@domain/blog/routes/BlogRoutes';
import ProjectsRoutes from '@domain/projects/routes/ProjectsRoutes';
import Home from '@pages/Home';
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
        <Route path="/login/*" element={<AuthPagesRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppPagesRoutes;
