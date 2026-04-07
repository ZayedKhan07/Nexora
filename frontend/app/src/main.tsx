import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx'
import './styles/tailwind.css'; // Import your Tailwind CSS file;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
