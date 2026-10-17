import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { useTranslations } from '../../i18n/useTranslations';
import Icon from './Icon';

export default function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const { locale, setLocale } = useContext(LocaleContext);
  const targetLocale = locale === 'ar' ? 'en' : 'ar';

  function handleLocaleChange() {
    setLocale(targetLocale);
  }

  return (
    <button
      className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-border px-3 py-2 text-[0.9rem] font-bold hover:bg-accent hover:text-background focus-visible:bg-accent focus-visible:text-background motion-safe:transition-colors motion-safe:duration-250"
      type="button"
      onClick={handleLocaleChange}
      lang={targetLocale}
      dir={targetLocale === 'ar' ? 'rtl' : 'ltr'}
      aria-label={t('ariaLabel')}
    >
      <Icon name="translation" />
      <span>{t('label')}</span>
    </button>
  );
}
