import React from 'react';
import { useRoutes } from 'react-router';

//  Routes
import { APP_ROUTES } from './routes/routes';

//  Styles
import './App.css';

function App() {
  const pages = useRoutes(APP_ROUTES);

  return (
    <div className='App'>
      <header className='App-header'>{pages}</header>
    </div>
  );
}

export default App;
