import { useContext } from 'react';
import { LocaleContext } from '../context/LocaleContext';
import { translations } from '../data/studio';
import Icon from './Icon';
import ArrowIcon from './ArrowIcon';

export default function MembershipCard({ plan }) {
  const locale = useContext(LocaleContext);
  const messages = translations[locale];
  return (
    <article className={`relative flex flex-col gap-4 rounded-3xl border bg-surface p-6 ${plan.featured ? 'border-accent' : 'border-border'}`} aria-labelledby={`${plan.id}-title`}>
      {plan.featured && <p className="absolute -top-4 start-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-background">{messages.planLabel}</p>}
      <div className="flex flex-wrap items-center gap-3">
        <span className={`inline-flex size-12 shrink-0 items-center justify-center rounded-full border ${plan.featured ? 'border-accent bg-accent text-background' : 'border-border bg-background text-accent'}`} aria-hidden="true"><Icon name={plan.icon} className="size-6" /></span>
        <h3 className="min-w-0 text-[1.6rem]" id={`${plan.id}-title`}>{plan.name[locale]}</h3>
      </div>
      <p className="min-h-[3.4em] text-[0.85rem] text-muted">{plan.description[locale]}</p>
      <p className="mt-1 flex flex-wrap items-baseline gap-x-[0.375rem] gap-y-1 border-b border-border pb-5 text-[clamp(2.25rem,4vw,3rem)] leading-[1.2] font-bold">
        <span className="text-[0.85rem]">{messages.currency}</span>
        <bdi>{plan.price.toLocaleString(locale === 'ar' ? 'ar-u-nu-arab' : 'en')}</bdi>
        <span className="text-[0.85rem] font-normal text-muted">{messages.pricePeriod}</span>
      </p>
      <ul role="list" className="mb-4 grid gap-3 text-[0.85rem]" id={`${plan.id}-details`} tabIndex={-1}>
        {plan.features.map((feature) => (
          <li className="flex items-start gap-2.5" key={feature.id}>
            <Icon name="tick-02" className="mt-[0.15rem] size-[1.1rem] shrink-0 text-accent" /><span className="min-w-0 wrap-anywhere">{feature.text[locale]}</span>
          </li>
        ))}
      </ul>
      <a className={`group mt-auto flex min-h-[52px] items-center justify-between gap-3 rounded-full border px-3 py-[0.8rem] text-[0.9rem] font-bold hover:border-accent-hover hover:bg-accent-hover hover:text-background focus-visible:border-accent-hover focus-visible:bg-accent-hover focus-visible:text-background motion-safe:transition-[background-color,color,border-color,transform] motion-safe:duration-250 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-px ${plan.featured ? 'border-accent bg-accent text-background' : 'border-border bg-transparent text-text'}`} href={`#${plan.id}-details`} aria-label={`${messages.aboutPlan}: ${plan.name[locale]}`}>
        {messages.aboutPlan}<ArrowIcon />
      </a>
    </article>
  );
}
