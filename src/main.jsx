import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { LocaleContext } from './context/LocaleContext';
import './index.css';

// Each HTML entry sets its own language; read it once when the app starts.
const locale = document.documentElement.lang === 'ar' ? 'ar' : 'en';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* In React 19, LocaleContext itself is the provider for the app below. */}
    <LocaleContext value={locale}>
      <App />
    </LocaleContext>
  </StrictMode>,
);
