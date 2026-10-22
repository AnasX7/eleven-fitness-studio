import Link from 'next/link';
import { useTranslations } from '../../i18n/useTranslations';
import { navigation } from '../../config/navigation';
import Icon from '../ui/Icon';

export default function MobileMenu() {
  const t = useTranslations();

  return (
    <details className="group block lg:hidden">
      <summary
        className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-border hover:bg-accent hover:text-background focus-visible:bg-accent focus-visible:text-background group-open:bg-accent group-open:text-background motion-safe:transition-colors motion-safe:duration-250 [&::-webkit-details-marker]:hidden"
        aria-label={t('MobileMenu.label')}
      >
        <Icon name="menu-01" className="size-5 group-open:hidden" />
        <Icon name="cancel-01" className="hidden size-5 group-open:block" />
      </summary>
      <nav
        className="absolute inset-x-5 top-[calc(100%+0.5rem)] z-10 rounded-3xl border border-border bg-surface p-3"
        aria-label={t('Common.navigationLabel')}
      >
        <ul className="flex flex-col gap-1 text-[0.85rem] font-bold md:text-[0.9rem]" role="list">
          {navigation.map((id) => (
            <li className="min-w-0 wrap-anywhere" key={id}>
              <Link
                className="block min-h-11 rounded-full px-4 py-2.5 hover:bg-accent hover:text-background focus-visible:bg-accent focus-visible:text-background motion-safe:transition-colors motion-safe:duration-250"
                href={`/#${id}`}
              >
                {t(`Navigation.${id}`)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
