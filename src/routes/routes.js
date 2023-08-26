import React from 'react';

// Layout
import AppLayout from '../layout/layout';

// Pages
import HomePage from '../pages/home/home';
import CompletedTodosPage from '../pages/completed-todos/completed-todos';

export const APP_ROUTES = [
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
