import { useTranslations } from '../../i18n/useTranslations';
import ArrowIcon from '../ui/ArrowIcon';

export default function Hero() {
  const t = useTranslations('Hero');
  const tCommon = useTranslations('Common');

  return (
    <section
      className="relative isolate flex min-h-[500px] items-center overflow-clip bg-background text-text md:min-h-[620px]"
      aria-labelledby="hero-title"
    >
      <img
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[66%_center] md:object-[center_20%] rtl:-scale-x-100"
        src="/assets/images/hero.webp"
        alt={t('imageAlt')}
        width="1536"
        height="1024"
        fetchPriority="high"
      />
      {/* The dark overlay keeps the text readable over the photograph. */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(17_19_16/92%),rgb(17_19_16/65%))] md:bg-[linear-gradient(90deg,rgb(17_19_16/97%)_0%,rgb(17_19_16/85%)_35%,rgb(17_19_16/18%)_75%)] rtl:bg-[linear-gradient(270deg,rgb(17_19_16/92%),rgb(17_19_16/65%))] md:rtl:bg-[linear-gradient(270deg,rgb(17_19_16/97%)_0%,rgb(17_19_16/85%)_35%,rgb(17_19_16/18%)_75%)]"
        aria-hidden="true"
      />
      <div className="mx-auto w-full max-w-[1248px] px-5 py-8 md:px-6 md:py-16">
        <h1
          className="max-w-[12ch] text-[clamp(2.4rem,9.5vw,3.6rem)] wrap-anywhere md:text-[clamp(3.5rem,6vw,5.25rem)]"
          id="hero-title"
        >
          {t('title')}
          <span className="block text-accent">{t('accent')}</span>
        </h1>
        <p className="mt-4 max-w-[28ch] text-base md:mt-6 md:max-w-[35ch] md:text-[1.05rem]">
          {t('description')}
        </p>
        <div className="mt-6 flex max-w-80 flex-col flex-wrap items-stretch gap-3 md:mt-8 md:max-w-none md:flex-row md:items-center md:gap-6">
          <a
            className="group flex min-h-[52px] items-center justify-between gap-4 rounded-full border border-accent bg-accent px-5 py-[0.8rem] text-[0.9rem] font-bold text-background hover:border-accent-hover hover:bg-accent-hover focus-visible:border-accent-hover focus-visible:bg-accent-hover motion-safe:transition-[background-color,color,border-color,transform] motion-safe:duration-250 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-px md:gap-8"
            href="#schedule"
          >
            {tCommon('findClass')}
            <ArrowIcon />
          </a>
          <a
            className="group flex min-h-[52px] items-center justify-between gap-4 rounded-full border border-text/50 bg-transparent px-5 py-[0.8rem] text-[0.9rem] font-bold text-text hover:border-accent-hover hover:bg-accent-hover hover:text-background focus-visible:border-accent-hover focus-visible:bg-accent-hover focus-visible:text-background motion-safe:transition-[background-color,color,border-color,transform] motion-safe:duration-250 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-px md:gap-8"
            href="#trainers"
          >
            {t('meetTrainers')}
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
