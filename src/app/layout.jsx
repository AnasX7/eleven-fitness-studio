import '../index.css';
import { messages } from '../messages';
import LocaleProvider from '../context/LocaleProvider';
import { getRequestLocale } from '../i18n/getRequestLocale';

export async function generateMetadata() {
  const locale = await getRequestLocale();

  return {
    ...messages[locale].Metadata,
    icons: { icon: '/assets/icons/favicon.svg' },
  };
}

export default async function RootLayout({ children }) {
  const locale = await getRequestLocale();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body id="top">
        <LocaleProvider initialLocale={locale}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
