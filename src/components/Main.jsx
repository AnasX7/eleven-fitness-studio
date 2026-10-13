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
    <main className="main-frame">
      <Hero language={language} />
      <section className="section schedule-section" id="schedule" aria-labelledby="schedule-title">
        <div className="container">
          <div className="section-heading">
            <h2 id="schedule-title">{copy.scheduleTitle}</h2>
            <p>{copy.scheduleDescription}</p>
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
          <div className="schedule-intro">
            <p className="schedule-label"><Icon name="calendar-03" /><span>{copy.weeklySchedule}</span></p>
          </div>
          <ul className="schedule-list" role="list" aria-label={copy.weeklyClasses}>
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
      <section className="section trainers-section" id="trainers" aria-labelledby="trainers-title">
        <div className="container">
          <div className="section-heading">
            <h2 id="trainers-title">{copy.trainersTitle}</h2>
            <p>{copy.trainersDescription}</p>
          </div>
          <div className="card-grid trainer-grid">
            {trainers.map((trainer) => <TrainerCard key={trainer.id} trainer={trainer} language={language} />)}
          </div>
        </div>
      </section>
      <section className="section membership-section" id="membership" aria-labelledby="membership-title">
        <div className="container">
          <div className="section-heading">
            <h2 id="membership-title">{copy.membershipTitle}</h2>
            <p>{copy.membershipDescription}</p>
          </div>
          <div className="card-grid pricing-grid">
            {memberships.map((plan) => <MembershipCard key={plan.id} plan={plan} language={language} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
