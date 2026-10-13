import { useContext } from 'react';
import { LocaleContext } from '../context/LocaleContext';
import { translations } from '../data/studio';

export default function SaveToggle({ value, onChange, label }) {
  const locale = useContext(LocaleContext);
  const messages = translations[locale];
  return (
    <button
      type="button"
      aria-pressed={value}
      aria-label={`${messages.saveClass}: ${label}`}
      onClick={() => onChange(!value)}
      className={`min-h-11 cursor-pointer rounded-full border border-solid px-4 py-2 font-sans text-sm font-bold leading-[1.7] motion-safe:transition-colors ${value ? 'border-accent bg-accent text-background' : 'border-border bg-transparent text-text hover:border-accent hover:text-accent'}`}
    >
      {value ? messages.saved : messages.saveClass}
    </button>
  );
}
