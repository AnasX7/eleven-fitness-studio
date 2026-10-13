import { ui } from '../data/studio';
import Icon from './Icon';

export default function MembershipCard({ plan, language }) {
  const copy = ui[language];
  return (
    <article className={`pricing-card ${plan.featured ? 'pricing-featured' : ''}`} aria-labelledby={`${plan.id}-title`}>
      {plan.featured && <p className="plan-label">{copy.planLabel}</p>}
      <div className="plan-heading">
        <span className="icon plan-icon" aria-hidden="true"><Icon name={plan.icon} /></span>
        <h3 id={`${plan.id}-title`}>{plan.name[language]}</h3>
      </div>
      <p className="plan-description">{plan.description[language]}</p>
      <p className="price">
        <span className="currency">{copy.currency}</span>
        <bdi className="price-amount">{plan.price.toLocaleString(language === 'ar' ? 'ar-u-nu-arab' : 'en')}</bdi>
        <span className="price-period">{copy.pricePeriod}</span>
      </p>
      <ul role="list" className="plan-features" id={`${plan.id}-details`} tabIndex={-1}>
        {plan.features.map((feature) => (
          <li key={feature.id}><Icon name="tick-02" /><span>{feature.text[language]}</span></li>
        ))}
      </ul>
      <a className={`button ${plan.featured ? '' : 'button-outline'}`} href={`#${plan.id}-details`} aria-label={`${copy.aboutPlan}: ${plan.name[language]}`}>
        {copy.aboutPlan}
        <span className="icon icon-diagonal" aria-hidden="true"><Icon name={language === 'ar' ? 'arrow-up-left-01' : 'arrow-up-right-01'} /></span>
      </a>
    </article>
  );
}
