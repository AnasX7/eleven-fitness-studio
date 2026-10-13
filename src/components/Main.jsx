import { useState } from 'react';
import { categories, classes, trainers, memberships, ui } from '../data/studio';
import Hero from './Hero';
import ClassCard from './ClassCard';
import TrainerCard from './TrainerCard';
import MembershipCard from './MembershipCard';
import Icon from './Icon';

export default function Main({ language }) {
  const copy = ui[language];
  const [category, setCategory] = useState('all');
  // shortcut: selections last for this page visit; add persistence if saved classes become a product feature.
  const [savedById, setSavedById] = useState({});
  const visibleClasses = category === 'all'
    ? classes
    : classes.filter((session) => session.category === category);
  return (
    <main className="mx-auto w-full max-w-[1248px] border-x border-border">
      <Hero language={language} />
      <section className="relative py-12 before:pointer-events-none before:absolute before:top-0 before:left-1/2 before:w-[100cqw] before:-translate-x-1/2 before:border-t before:border-border md:py-16 lg:py-20" id="schedule" aria-labelledby="schedule-title">
        <div className="mx-auto w-full max-w-[1248px] px-5 md:px-6">
          <div className="mb-8 max-w-[780px]">
            <h2 id="schedule-title">{copy.scheduleTitle}</h2>
            <p className="mt-3 max-w-[52ch] text-muted">{copy.scheduleDescription}</p>
          </div>
          <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label={copy.filterLabel}>
            {categories.map((option) => (
              <button
                key={option.id}
                type="button"
                data-category={option.id}
                aria-pressed={category === option.id}
                onClick={() => setCategory(option.id)}
                className={`min-h-11 cursor-pointer rounded-full border border-solid px-4 py-2 font-sans text-sm font-bold leading-[1.7] motion-safe:transition-colors ${category === option.id ? 'border-accent bg-accent text-background' : 'border-border bg-transparent text-text hover:border-accent hover:text-accent'}`}
              >
                {option.label[language]}
              </button>
            ))}
          </div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 text-[0.8rem] text-muted">
            <p className="flex items-center gap-[0.65rem] font-bold text-text [&>svg]:text-accent"><Icon name="calendar-03" /><span>{copy.weeklySchedule}</span></p>
          </div>
          <ul className="grid gap-3" role="list" aria-label={copy.weeklyClasses}>
            {visibleClasses.map((session) => (
              <ClassCard
                key={session.id}
                session={session}
                trainer={trainers.find((trainer) => trainer.id === session.trainerId)}
                language={language}
                saved={savedById[session.id] ?? false}
                onSavedChange={(value) => setSavedById((previous) => ({ ...previous, [session.id]: value }))}
              />
            ))}
          </ul>
        </div>
      </section>
      <section className="relative bg-surface py-12 before:pointer-events-none before:absolute before:top-0 before:left-1/2 before:w-[100cqw] before:-translate-x-1/2 before:border-t before:border-border md:py-16 lg:py-20" id="trainers" aria-labelledby="trainers-title">
        <div className="mx-auto w-full max-w-[1248px] px-5 md:px-6">
          <div className="mb-8 max-w-[780px]">
            <h2 id="trainers-title">{copy.trainersTitle}</h2>
            <p className="mt-3 max-w-[52ch] text-muted">{copy.trainersDescription}</p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6 @max-[36rem]:grid-cols-1">
            {trainers.map((trainer) => <TrainerCard key={trainer.id} trainer={trainer} language={language} />)}
          </div>
        </div>
      </section>
      <section className="relative py-12 before:pointer-events-none before:absolute before:top-0 before:left-1/2 before:w-[100cqw] before:-translate-x-1/2 before:border-t before:border-border md:py-16 lg:py-20" id="membership" aria-labelledby="membership-title">
        <div className="mx-auto w-full max-w-[1248px] px-5 md:px-6">
          <div className="mb-8 max-w-[780px]">
            <h2 id="membership-title">{copy.membershipTitle}</h2>
            <p className="mt-3 max-w-[52ch] text-muted">{copy.membershipDescription}</p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6 @max-[36rem]:grid-cols-1">
            {memberships.map((plan) => <MembershipCard key={plan.id} plan={plan} language={language} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
