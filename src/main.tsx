// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ default export 제대로 됐는지 확인
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
