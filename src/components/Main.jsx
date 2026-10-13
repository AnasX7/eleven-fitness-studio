import { classes, trainers, memberships, ui } from '../data/studio';
import Hero from './Hero';
import ClassCard from './ClassCard';
import TrainerCard from './TrainerCard';
import MembershipCard from './MembershipCard';
import Icon from './Icon';

export default function Main({ language }) {
  const copy = ui[language];
  return (
    <main className="main-frame">
      <Hero language={language} />
      <section className="section schedule-section" id="schedule" aria-labelledby="schedule-title">
        <div className="container">
          <div className="section-heading">
            <h2 id="schedule-title">{copy.scheduleTitle}</h2>
            <p>{copy.scheduleDescription}</p>
          </div>
          <div className="schedule-intro">
            <p className="schedule-label"><Icon name="calendar-03" /><span>{copy.weeklySchedule}</span></p>
          </div>
          <ul className="schedule-list" role="list" aria-label={copy.weeklyClasses}>
            {classes.map((session) => (
              <ClassCard key={session.id} session={session} trainer={trainers.find((trainer) => trainer.id === session.trainerId)} language={language} />
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
