import { useContext, useState } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { useTranslations } from '../../i18n/useTranslations';
import { categories, classes, trainers } from '../../data/studio';
import ClassCard from '../cards/ClassCard';
import Icon from '../ui/Icon';

export default function ScheduleSection() {
  const t = useTranslations('ScheduleSection');
  const locale = useContext(LocaleContext);
  const [category, setCategory] = useState('all');

  // Keep selections above the cards so filtering a card out does not erase its saved value.
  const [savedById, setSavedById] = useState({});

  const visibleClasses = category === 'all'
    ? classes
    : classes.filter((session) => session.category === category);

  return (
    <section
      className="relative py-12 before:pointer-events-none before:absolute before:top-0 before:left-1/2 before:w-[100cqw] before:-translate-x-1/2 before:border-t before:border-border md:py-16 lg:py-20"
      id="schedule"
      aria-labelledby="schedule-title"
    >
      <div className="mx-auto w-full max-w-[1248px] px-5 md:px-6">
        <div className="mb-8 max-w-[780px]">
          <h2 id="schedule-title">
            {t('title')}
          </h2>
          <p className="mt-3 max-w-[52ch] text-muted">
            {t('description')}
          </p>
        </div>
        <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label={t('filterLabel')}>
          {categories.map((option) => (
            <button
              key={option.id}
              type="button"
              data-category={option.id}
              aria-pressed={category === option.id}
              onClick={() => setCategory(option.id)}
              className={`min-h-11 cursor-pointer rounded-full border border-solid px-4 py-2 font-sans text-sm font-bold leading-[1.7] motion-safe:transition-colors ${category === option.id ? 'border-accent bg-accent text-background' : 'border-border bg-transparent text-text hover:border-accent hover:text-accent'}`}
            >
              {option.label[locale]}
            </button>
          ))}
        </div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 text-[0.8rem] text-muted">
          <p className="flex items-center gap-[0.65rem] font-bold text-text [&>svg]:text-accent">
            <Icon name="calendar-03" />
            <span>{t('weeklySchedule')}</span>
          </p>
        </div>
        <ul className="grid gap-3" role="list" aria-label={t('weeklyClasses')}>
          {visibleClasses.map((session) => (
            <ClassCard
              key={session.id}
              session={session}
              trainer={trainers.find((trainer) => trainer.id === session.trainerId)}
              saved={savedById[session.id] ?? false}
              onSavedChange={(value) =>
                setSavedById((previous) => ({
                  ...previous,
                  [session.id]: value,
                }))
              }
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
