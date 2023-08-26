import React from 'react';

// Layout
import AppLayout from '../layout/layout';

// Pages
import HomePage from '../pages/home/home';
import CompletedTodosPage from '../pages/completed-todos/completed-todos';
import { Navigate } from 'react-router';

export const APP_ROUTES = [
  {
    path: '/',
    element: <Navigate to='home' />,
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'completed-todos',
        element: <CompletedTodosPage />,
      },
    ],
  },
];
