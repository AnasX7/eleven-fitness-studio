'use client';

import { useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LocaleContext } from './LocaleContext';
import { messages } from '../messages';
import { normalizeLocale } from '../i18n/locale';

export default function LocaleProvider({ children, initialLocale }) {
  const [locale, setCurrentLocale] = useState(initialLocale);
  const router = useRouter();

  function setLocale(value) {
    const nextLocale = normalizeLocale(value);
    const secure = window.location.protocol === 'https:' ? '; Secure' : '';

    document.cookie = `locale=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
    setCurrentLocale(nextLocale);
    router.refresh();
  }

  // Keep instant switching in sync while Next.js refreshes the server metadata.
  useLayoutEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.title = messages[locale].Metadata.title;
    document.querySelector('meta[name="description"]').content = messages[locale].Metadata.description;
  }, [locale]);

  return (
    <LocaleContext value={{ locale, setLocale }}>
      {children}
    </LocaleContext>
  );
}
