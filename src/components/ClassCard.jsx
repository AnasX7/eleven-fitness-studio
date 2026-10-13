import { ui } from '../data/studio';
import Icon from './Icon';
import SaveToggle from './SaveToggle';

export default function ClassCard({ session, trainer, language, saved, onSavedChange }) {
  return (
    <li className="class-row" data-class-id={session.id}>
      <div className="class-time">
        <span className="day">{session.day[language]}</span>
        <time dateTime={session.timeValue}>{session.time[language]}</time>
      </div>
      <div className="class-description">
        <span className="icon class-icon" aria-hidden="true"><Icon name={session.icon} /></span>
        <div className="class-copy">
          <h3>{session.title[language]}</h3>
          <p>{session.description[language]}</p>
        </div>
      </div>
      <div className="class-meta">
        <span className="class-type">
          <span className="icon" aria-hidden="true"><Icon name="clock-01" /></span>
          <span>{session.details[language]}</span>
        </span>
        <p className="class-coach">
          <img className="coach-avatar" src={trainer.image} alt="" aria-hidden="true" width="32" height="32" loading="lazy" />
          <span>{ui[language].withCoach} {trainer.name[language]}</span>
        </p>
        <SaveToggle value={saved} onChange={onSavedChange} label={`${session.title[language]} · ${session.day[language]}`} language={language} />
      </div>
    </li>
  );
}
