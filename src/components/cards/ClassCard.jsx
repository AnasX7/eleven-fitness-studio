import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { useTranslations } from '../../i18n/useTranslations';
import Icon from '../ui/Icon';

export default function ClassCard({ session, trainer }) {
  const t = useTranslations('Common');
  const { locale } = useContext(LocaleContext);

  return (
    <li
      className="grid grid-cols-1 items-start gap-4 rounded-[20px] border border-border bg-surface p-4 md:grid-cols-[100px_minmax(0,1fr)_190px] md:items-center md:gap-5 md:p-6 lg:grid-cols-[120px_minmax(0,1fr)_210px]"
      data-class-id={session.id}
    >
      <div className="flex min-w-0 flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-border pb-3 font-bold wrap-anywhere md:flex-col md:items-stretch md:justify-start md:gap-[0.2rem] md:border-e md:border-b-0 md:pe-5 md:pb-0">
        <span className="text-[0.72rem] tracking-[0.08em] text-accent rtl:text-[0.85rem] rtl:tracking-normal">
          {session.day[locale]}
        </span>
        <time dateTime={session.timeValue}>
          {session.time[locale]}
        </time>
      </div>
      <div className="grid min-w-0 grid-cols-[36px_minmax(0,1fr)] items-center gap-x-3 gap-y-2 wrap-anywhere md:flex md:items-start md:gap-4">
        <span
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-background text-accent md:size-11"
          aria-hidden="true"
        >
          <Icon name={session.icon} className="size-6" />
        </span>
        <div className="contents min-w-0 wrap-anywhere md:block">
          <h3 className="text-[1.1rem] md:text-[1.3rem]">
            {session.title[locale]}
          </h3>
          <p className="col-span-full text-[0.85rem] text-muted md:mt-[0.35rem]">
            {session.description[locale]}
          </p>
        </div>
      </div>
      <div className="flex min-w-0 flex-wrap items-center gap-3 border-t border-border pt-3 wrap-anywhere md:flex-col md:items-start md:border-t-0 md:pt-0">
        <span className="flex min-w-0 max-w-full flex-[1_1_8rem] items-center gap-2 text-[0.8rem] text-muted md:flex-initial md:text-[0.85rem]">
          <span
            className="inline-flex size-5 shrink-0 items-center justify-center rounded-full md:size-8 md:border md:border-border"
            aria-hidden="true"
          >
            <Icon name="clock-01" className="size-4" />
          </span>
          <span className="min-w-0">
            {session.details[locale]}
          </span>
        </span>
        <p className="flex min-w-0 max-w-full flex-[1_1_8rem] items-center gap-2 text-[0.8rem] text-muted md:flex-initial md:text-[0.85rem]">
          <img
            className="size-7 shrink-0 rounded-full border border-border object-cover object-top md:size-8"
            src={trainer.image}
            alt=""
            aria-hidden="true"
            width="32"
            height="32"
            loading="lazy"
          />
          <span className="min-w-0">
            {t('withCoach')} {trainer.name[locale]}
          </span>
        </p>
      </div>
    </li>
  );
}
