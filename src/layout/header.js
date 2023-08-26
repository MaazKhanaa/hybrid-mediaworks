import React from 'react';

//
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <header>
      <div className='mainHeader'>
        <div className='container'>
          <nav className='d-flex justify-content-between align-items-center'>
            <div className='mainLogo'>
              <NavLink
                style={{
                  color: 'gray',
                  textDecoration: 'none',
                  fontSize: '35px',
                }}
                to='/home'>
                Hybrid Mediaworks
              </NavLink>
            </div>
            <div className='navItems'>
              <NavLink className='me-4' to='/home'>
                Home
              </NavLink>
              <NavLink to='/completed-todos'>Completed Task</NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
