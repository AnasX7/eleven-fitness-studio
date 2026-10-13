import { ui } from '../data/studio';
import Icon from './Icon';

export default function Hero({ language }) {
  const copy = ui[language];
  const arrow = language === 'ar' ? 'arrow-up-left-01' : 'arrow-up-right-01';
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-image" src="/assets/images/hero.webp" alt={copy.heroImageAlt} width="1536" height="1024" fetchPriority="high" />
      <div className="container hero-content">
        <h1 id="hero-title">{copy.heroTitle}<span>{copy.heroAccent}</span></h1>
        <p className="hero-description">{copy.heroDescription}</p>
        <div className="hero-actions">
          <a className="button" href="#schedule">
            {copy.findClass}<span className="icon icon-diagonal" aria-hidden="true"><Icon name={arrow} /></span>
          </a>
          <a className="button button-outline" href="#trainers">
            {copy.meetTrainers}<span className="icon icon-diagonal" aria-hidden="true"><Icon name={arrow} /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
