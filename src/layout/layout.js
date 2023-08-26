import React from 'react';
import { Outlet } from 'react-router';

const AppLayout = ({ children }) => {
  console.log('layout renderd');
  return (
    <>
      <header>header </header>
      {children}
    </>
  );
};

export default AppLayout;
