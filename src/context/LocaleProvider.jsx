import { useEffect, useLayoutEffect, useState } from 'react';
import { LocaleContext } from './LocaleContext';
import { messages } from '../messages';

function getInitialLocale() {
  try {
    return localStorage.getItem('locale') === 'ar' ? 'ar' : 'en';
  } catch {
    return 'en';
  }
}

export default function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(getInitialLocale);

  // Apply direction before paint so a saved Arabic preference starts in RTL.
  useLayoutEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.title = messages[locale].Metadata.title;
    document.querySelector('meta[name="description"]').content = messages[locale].Metadata.description;
  }, [locale]);

  useEffect(() => {
    try {
      localStorage.setItem('locale', locale);
    } catch {
      // Keep switching available when browser storage is blocked.
    }
  }, [locale]);

  return (
    <LocaleContext value={{ locale, setLocale }}>
      {children}
    </LocaleContext>
  );
}
