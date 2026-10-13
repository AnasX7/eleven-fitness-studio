import { ui } from '../data/studio';
import Icon from './Icon';

export default function TrainerCard({ trainer, language }) {
  return (
    <article className="trainer-card" aria-labelledby={`${trainer.id}-name`}>
      <img src={trainer.image} alt={trainer.imageAlt[language]} width="1024" height="1536" loading="lazy" />
      <div className="trainer-content">
        <p className="trainer-specialty">{trainer.specialty[language]}</p>
        <h3 id={`${trainer.id}-name`}>{trainer.name[language]}</h3>
        <p>{trainer.description[language]}</p>
        <a className="text-link" href="#schedule">
          {ui[language].findClass}
          <span className="icon icon-diagonal" aria-hidden="true"><Icon name={language === 'ar' ? 'arrow-up-left-01' : 'arrow-up-right-01'} /></span>
        </a>
      </div>
    </article>
  );
}
