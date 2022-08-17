import { Routes, Route } from 'react-router-dom';
import routes from './configRoutes';
import ProtectedRoute from './ProtectedRoute';

import React from 'react';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';

import { ADMIN_LAYOUT } from '../constants/layouts';

const Routers = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        let Component = route.component;
        let Layout = MainLayout;
        if (route.layout === ADMIN_LAYOUT) {
          Layout = AdminLayout;
        }

        if (route.protected) {
          Component = (
            <Layout>
              <ProtectedRoute>
                <route.component />
              </ProtectedRoute>
            </Layout>
          );
        } else {
          Component = (
            <Layout>
              <route.component />
            </Layout>
          );
        }

        return <Route key={index} path={route.path} element={Component} />;
      })}
    </Routes>
  );
};

export default Routers;
