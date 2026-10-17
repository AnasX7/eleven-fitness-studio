import { useState } from 'react';
import { useTranslations } from '../../i18n/useTranslations';
import { classes } from '../../data/classes';
import { trainers } from '../../data/trainers';
import ClassCard from '../cards/ClassCard';
import ClassFilter from '../ui/ClassFilter';
import Icon from '../ui/Icon';

export default function ScheduleSection() {
  const t = useTranslations('ScheduleSection');
  const [category, setCategory] = useState('all');

  const visibleClasses = category === 'all'
    ? classes
    : classes.filter((session) => session.category === category);

  function handleCategoryChange(value) {
    setCategory(value);
  }

  return (
    <section
      className="relative py-12 before:pointer-events-none before:absolute before:top-0 before:left-1/2 before:w-[100cqw] before:-translate-x-1/2 before:border-t before:border-border md:py-16 lg:py-20"
      id="schedule"
      aria-labelledby="schedule-title"
    >
      <div className="mx-auto w-full max-w-312 px-5 md:px-6">
        <div className="mb-8 max-w-195">
          <h2 id="schedule-title">
            {t('title')}
          </h2>
          <p className="mt-3 max-w-[52ch] text-muted">
            {t('description')}
          </p>
        </div>
        <ClassFilter value={category} onChange={handleCategoryChange} />
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
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
