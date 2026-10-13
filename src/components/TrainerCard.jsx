import { useContext } from 'react';
import { LocaleContext } from '../context/LocaleContext';
import { translations } from '../data/studio';
import ArrowIcon from './ArrowIcon';

export default function TrainerCard({ trainer }) {
  const locale = useContext(LocaleContext);

  return (
    <article
      className="flex flex-col rounded-3xl border border-border bg-background"
      aria-labelledby={`${trainer.id}-name`}
    >
      <img
        className="aspect-[4/3] w-full rounded-t-[23px] object-cover object-top"
        src={trainer.image}
        alt={trainer.imageAlt[locale]}
        width="1024"
        height="1536"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col items-start p-6">
        <p className="mb-2 text-xs text-muted">
          {trainer.specialty[locale]}
        </p>
        <h3 className="text-[1.6rem]" id={`${trainer.id}-name`}>
          {trainer.name[locale]}
        </h3>
        <p className="mt-[0.85rem] mb-4 text-[0.9rem] text-muted">
          {trainer.description[locale]}
        </p>
        <a
          className="group mt-auto inline-flex min-h-11 items-center gap-4 rounded-full px-3 py-2 text-[0.9rem] font-bold hover:bg-accent hover:text-background focus-visible:bg-accent focus-visible:text-background motion-safe:transition-colors motion-safe:duration-250"
          href="#schedule"
        >
          {translations[locale].findClass}
          <ArrowIcon />
        </a>
      </div>
    </article>
  );
}
