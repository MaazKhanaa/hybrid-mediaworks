import React from 'react';

// ====================== Components ======================
import TodoListComponent from './compoents/todos-list';
import CompletedTodosComponent from './compoents/completed-todos';

// ====================== Styles ======================
import './App.css';

import AppRoutes from './routes/routes';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='container'>
          <AppRoutes />
        </div>
      </header>
    </div>
  );
}

export default App;
