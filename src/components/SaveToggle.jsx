import { useTranslations } from '../i18n/useTranslations';

export default function SaveToggle({ value, onChange, label }) {
  const t = useTranslations('SaveToggle');

  return (
    <button
      type="button"
      aria-pressed={value}
      aria-label={`${t('save')}: ${label}`}
      onClick={() => onChange(!value)}
      className={`min-h-11 cursor-pointer rounded-full border border-solid px-4 py-2 font-sans text-sm font-bold leading-[1.7] motion-safe:transition-colors ${value ? 'border-accent bg-accent text-background' : 'border-border bg-transparent text-text hover:border-accent hover:text-accent'}`}
    >
      {value ? t('saved') : t('save')}
    </button>
  );
}
