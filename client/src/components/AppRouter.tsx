import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes, RouterNames } from '../router/index';

const AppRouter = () => {
  const isAuth = true;
  return isAuth ? (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} Component={route.component} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to={RouterNames.NOT_FOUND} replace />} />
    </Routes>
  ) : (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} Component={route.component} key={route.path} />
      ))}
    </Routes>
  );
};
export default AppRouter;
