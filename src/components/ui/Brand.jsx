import { useTranslations } from '../../i18n/useTranslations';
import Link from 'next/link';

export default function Brand() {
  const t = useTranslations('Common');

  return (
    <Link
      className="flex min-w-0 items-center gap-[0.65rem] text-lg leading-none font-black tracking-[-0.06em] rtl:text-base rtl:tracking-normal"
      href="/#top"
      aria-label={t('homeLabel')}
    >
      <span
        className="h-8 w-6.75 shrink-0 skew-x-[-16deg] border-x-[9px] border-accent"
        aria-hidden="true"
      />
      <span className="min-w-0">
        {t('brand')}
        <span className="mt-0.5 block text-[0.65rem] leading-[1.15] font-bold tracking-[0.18em] rtl:text-xs rtl:tracking-normal">
          {t('brandCaption')}
        </span>
      </span>
    </Link>
  );
}
