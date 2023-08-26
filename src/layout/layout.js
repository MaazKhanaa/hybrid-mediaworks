import React from 'react';

// ========================================
import { Outlet } from 'react-router';

// Components
import HeaderComponent from './header';

const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Outlet />
    </React.Fragment>
  );
};

export default AppLayout;
