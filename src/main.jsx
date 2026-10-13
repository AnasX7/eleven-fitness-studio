import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const language = document.documentElement.lang === 'ar' ? 'ar' : 'en';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App language={language} />
  </StrictMode>,
);
