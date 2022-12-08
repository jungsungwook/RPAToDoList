import React from 'react';
import ReactDOM from 'react-dom/client';
import SideBarComponent from './components/SideBarComponent';
import Router from './Router';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
