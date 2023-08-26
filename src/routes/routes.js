import React from 'react';
import { Navigate, Route, Routes } from 'react-router';

// Pages
import HomePage from '../pages/home/home';
import CompletedTodosPage from '../pages/completed-todos/completed-todos';
import AppLayout from '../layout/layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route
        path='/home'
        element={
          <AppLayout>
            <HomePage />
          </AppLayout>
        }
      />
      <Route
        path='/completed-todos'
        element={
          <AppLayout>
            <CompletedTodosPage />
          </AppLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
