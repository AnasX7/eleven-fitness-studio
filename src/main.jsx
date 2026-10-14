import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { LocaleContext } from './context/LocaleContext';
import './index.css';

const locale = document.documentElement.lang === 'ar' ? 'ar' : 'en';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocaleContext value={locale}>
      <App />
    </LocaleContext>
  </StrictMode>,
);
