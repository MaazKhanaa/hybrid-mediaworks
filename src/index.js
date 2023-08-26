import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// ========= Store =========
import { Provider } from 'react-redux';
import store from './store';

// ========= Components =========
import App from './App';

// React Toast
import { ToastContainer } from 'react-toastify';

// ==================
import reportWebVitals from './reportWebVitals';

// ==================
import 'react-toastify/dist/ReactToastify.css';

// ========= Bootstrap Link =========
import 'bootstrap/dist/css/bootstrap.min.css';

// ========= Main Style =========
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer
          position='bottom-left'
          autoClose={3000}
          pauseOnHover
          closeOnClick
          theme='dark'
        />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
