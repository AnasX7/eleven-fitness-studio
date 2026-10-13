import { useContext } from 'react';
import { LocaleContext } from '../context/LocaleContext';
import { navigation, translations } from '../data/studio';
import Brand from './Brand';
import Icon from './Icon';

export default function Header() {
  const locale = useContext(LocaleContext);
  const messages = translations[locale];
  const otherLocale = locale === 'ar' ? 'en' : 'ar';
  return (
    <header className="border-b border-border">
      <div className="relative mx-auto flex min-h-18 w-full max-w-[1248px] flex-wrap items-center gap-3 border-x border-border px-5 py-1 md:px-6 lg:gap-6">
        <Brand />
        <nav className="hidden lg:block" aria-label={messages.navigationLabel}>
          <ul className="flex items-center gap-2 text-[0.9rem] font-bold" role="list">
            {navigation.map((link) => (
              <li key={link.id}>
                <a className="block min-h-10 rounded-full px-4 py-2 hover:bg-accent hover:text-background focus-visible:bg-accent focus-visible:text-background motion-safe:transition-colors motion-safe:duration-250" href={`#${link.id}`}>{link.label[locale]}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ms-auto flex items-center gap-2 lg:gap-5">
          <a className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-3 py-2 text-[0.9rem] font-bold hover:bg-accent hover:text-background focus-visible:bg-accent focus-visible:text-background motion-safe:transition-colors motion-safe:duration-250" href={locale === 'ar' ? 'index.html' : 'ar.html'} lang={otherLocale} dir={otherLocale === 'ar' ? 'rtl' : 'ltr'} hrefLang={otherLocale} aria-label={messages.languageAriaLabel}>
            <Icon name="translation" />
            <span>{messages.languageLabel}</span>
          </a>
          <details className="group block lg:hidden">
            <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-border hover:bg-accent hover:text-background focus-visible:bg-accent focus-visible:text-background group-open:bg-accent group-open:text-background motion-safe:transition-colors motion-safe:duration-250 [&::-webkit-details-marker]:hidden" aria-label={messages.menuLabel}>
              <Icon name="menu-01" className="size-5 group-open:hidden" />
              <Icon name="cancel-01" className="hidden size-5 group-open:block" />
            </summary>
            <nav className="absolute inset-x-5 top-[calc(100%+0.5rem)] z-10 rounded-3xl border border-border bg-surface p-3" aria-label={messages.navigationLabel}>
              <ul className="flex flex-col gap-1 text-[0.85rem] font-bold md:text-[0.9rem]" role="list">
                {navigation.map((link) => (
                  <li className="min-w-0 wrap-anywhere" key={link.id}>
                    <a className="block min-h-11 rounded-full px-4 py-2.5 hover:bg-accent hover:text-background focus-visible:bg-accent focus-visible:text-background motion-safe:transition-colors motion-safe:duration-250" href={`#${link.id}`}>{link.label[locale]}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
