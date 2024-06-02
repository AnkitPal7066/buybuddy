import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cartcontext from './compo/ContextApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cartcontext>
      <App />
    </Cartcontext>
  </React.StrictMode>
);

