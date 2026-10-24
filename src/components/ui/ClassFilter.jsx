import { useTranslations } from '../../i18n/useTranslations';
const categories = ['all', 'strength', 'conditioning', 'mobility', 'mixed'];

export default function ClassFilter({ value, onChange }) {
  const t = useTranslations('ClassFilter');

  function handleCategoryClick(categoryId) {
    onChange(categoryId);
  }

  return (
    <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label={t('label')}>
      {categories.map((id) => (
        <button
          key={id}
          type="button"
          data-category={id}
          aria-pressed={value === id}
          onClick={() => handleCategoryClick(id)}
          className={`min-h-11 cursor-pointer rounded-full border border-solid px-4 py-2 font-sans text-sm font-bold leading-[1.7] motion-safe:transition-colors ${value === id ? 'border-accent bg-accent text-background' : 'border-border bg-transparent text-text hover:border-accent hover:text-accent'}`}
        >
          {t(id)}
        </button>
      ))}
    </div>
  );
}
