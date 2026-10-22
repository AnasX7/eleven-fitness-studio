'use client';

import dynamic from 'next/dynamic';
import LocaleProvider from '../context/LocaleProvider';

const App = dynamic(() => import('../App'), { ssr: false });

export default function HomePage() {
  return (
    <LocaleProvider>
      <App />
    </LocaleProvider>
  );
}
