import { useContext } from 'react';
import { LocaleContext } from '../context/LocaleContext';
import { navigation, translations } from '../data/studio';
import Brand from './Brand';

export default function Footer() {
  const locale = useContext(LocaleContext);
  const messages = translations[locale];
  return (
    <footer className="overflow-clip border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-[1248px] border-x border-border px-5 pt-8 pb-4 md:px-6 md:pt-14 md:pb-2">
        <div className="grid grid-cols-1 gap-5 pb-6 wrap-anywhere md:grid-cols-[1.5fr_1fr_1fr] md:gap-8 md:pb-10">
          <div className="min-w-0">
            <Brand />
            <p className="mt-3 text-[0.9rem] text-muted md:mt-4 md:max-w-[34ch]">{messages.footerDescription}</p>
          </div>
          <nav className="min-w-0" aria-labelledby="footer-links-title">
            <h3 className="mb-2 text-xs leading-[1.7] tracking-[0.08em] uppercase md:mb-3 rtl:tracking-normal" id="footer-links-title">{messages.explore}</h3>
            <ul className="flex flex-wrap gap-1 md:flex-col md:items-start" role="list">
              {navigation.map((link) => (
                <li key={link.id}>
                  <a className="inline-flex min-h-11 max-w-full items-center gap-4 rounded-full px-2.5 py-2 text-[0.85rem] font-bold hover:bg-accent hover:text-background focus-visible:bg-accent focus-visible:text-background motion-safe:transition-colors motion-safe:duration-250 md:px-3 md:text-[0.9rem]" href={`#${link.id}`}>{link.label[locale]}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="min-w-0">
            <h3 className="mb-2 text-xs leading-[1.7] tracking-[0.08em] uppercase md:mb-3 rtl:tracking-normal">{messages.approach}</h3>
            <p className="text-[0.9rem] text-muted md:max-w-[34ch]">{messages.approachDescription}</p>
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-start justify-between gap-3 md:flex-row md:items-baseline md:gap-x-6 md:gap-y-4">
          <p className="text-[min(18cqw,12rem)] leading-[0.8] font-black tracking-[-0.06em] rtl:leading-[1.3] rtl:tracking-normal" aria-hidden="true">{messages.brand}</p>
          <p className="self-start text-start text-xs text-muted md:ms-auto md:self-auto md:text-end md:rtl:self-end">{messages.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
