import { useContext } from 'react';
import { LocaleContext } from '../context/LocaleContext';
import { translations } from '../data/studio';

export default function Brand() {
  const locale = useContext(LocaleContext);
  const messages = translations[locale];
  return (
    <a className="flex min-w-0 items-center gap-[0.65rem] text-lg leading-none font-black tracking-[-0.06em] rtl:text-base rtl:tracking-normal" href="#top" aria-label={messages.homeLabel}>
      <span className="h-8 w-[27px] shrink-0 -skew-x-[16deg] border-x-[9px] border-accent" aria-hidden="true"></span>
      <span className="min-w-0">
        {messages.brand}
        <span className="mt-0.5 block text-[0.65rem] leading-[1.15] font-bold tracking-[0.18em] rtl:text-xs rtl:tracking-normal">{messages.brandCaption}</span>
      </span>
    </a>
  );
}
