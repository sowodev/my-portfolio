import Auth from '@pages/Auth';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import UnderImprovements from '@pages/UnderImprovements';
import { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

// This file is used to organize the routes of the application
const AppPagesRoutes: FC = (): ReactElement => {
  return (
    <div className="flex h-full w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/*" element={<UnderImprovements />} />
        <Route path="/projects/*" element={<UnderImprovements />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppPagesRoutes;
