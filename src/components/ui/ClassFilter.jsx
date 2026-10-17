import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { useTranslations } from '../../i18n/useTranslations';
import { categories } from '../../data/categories';

export default function ClassFilter({ value, onChange }) {
  const t = useTranslations('ClassFilter');
  const { locale } = useContext(LocaleContext);

  function handleCategoryClick(categoryId) {
    onChange(categoryId);
  }

  return (
    <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label={t('label')}>
      {categories.map((option) => (
        <button
          key={option.id}
          type="button"
          data-category={option.id}
          aria-pressed={value === option.id}
          onClick={() => handleCategoryClick(option.id)}
          className={`min-h-11 cursor-pointer rounded-full border border-solid px-4 py-2 font-sans text-sm font-bold leading-[1.7] motion-safe:transition-colors ${value === option.id ? 'border-accent bg-accent text-background' : 'border-border bg-transparent text-text hover:border-accent hover:text-accent'}`}
        >
          {option.label[locale]}
        </button>
      ))}
    </div>
  );
}
