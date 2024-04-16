import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './pages/Main/Main';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <main>
      <Main />
    </main>
  </React.StrictMode>
);
