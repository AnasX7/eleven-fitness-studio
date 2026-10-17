import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { useTranslations } from '../../i18n/useTranslations';

export default function QuantityStepper({ value, onChange, label }) {
  const t = useTranslations('QuantityStepper');
  const { locale } = useContext(LocaleContext);

  function handleIncrease() {
    onChange(value + 1);
  }

  function handleDecrease() {
    onChange(value - 1);
  }

  return (
    <div className="inline-flex max-w-full items-center gap-1 rounded-full border border-border p-1" role="group" aria-label={label}>
      <button
        type="button"
        className="flex size-[44px] shrink-0 cursor-pointer items-center justify-center rounded-full text-lg font-bold enabled:hover:bg-accent enabled:hover:text-background motion-safe:transition-colors disabled:cursor-not-allowed disabled:opacity-40"
        aria-label={`${t('decrease')}: ${label}`}
        disabled={value <= 1}
        onClick={handleDecrease}
      >
        <span aria-hidden="true">−</span>
      </button>
      <output className="min-w-8 px-1 text-center text-sm font-bold tabular-nums wrap-anywhere" aria-label={label}>
        {value.toLocaleString(locale === 'ar' ? 'ar-u-nu-arab' : 'en')}
      </output>
      <button
        type="button"
        className="flex size-[44px] shrink-0 cursor-pointer items-center justify-center rounded-full text-lg font-bold hover:bg-accent hover:text-background motion-safe:transition-colors"
        aria-label={`${t('increase')}: ${label}`}
        onClick={handleIncrease}
      >
        <span aria-hidden="true">+</span>
      </button>
    </div>
  );
}
