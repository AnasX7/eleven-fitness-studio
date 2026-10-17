import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { useTranslations } from '../../i18n/useTranslations';
import { navigation } from '../../data/navigation';
import Brand from '../ui/Brand';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import MobileMenu from './MobileMenu';

export default function Header() {
  const t = useTranslations('Common');
  const { locale } = useContext(LocaleContext);

  return (
    <header className="border-b border-border">
      <div className="relative mx-auto flex min-h-18 w-full max-w-312 flex-wrap items-center gap-3 border-x border-border px-5 py-1 md:px-6 lg:gap-6">
        <Brand />
        <nav className="hidden lg:block" aria-label={t('navigationLabel')}>
          <ul className="flex items-center gap-2 text-[0.9rem] font-bold" role="list">
            {navigation.map((link) => (
              <li key={link.id}>
                <a
                  className="block min-h-10 rounded-full px-4 py-2 hover:bg-accent hover:text-background focus-visible:bg-accent focus-visible:text-background motion-safe:transition-colors motion-safe:duration-250"
                  href={`#${link.id}`}
                >
                  {link.label[locale]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ms-auto flex items-center gap-2 lg:gap-5">
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
