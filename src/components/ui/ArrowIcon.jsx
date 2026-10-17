import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import Icon from './Icon';

export default function ArrowIcon() {
  const { locale } = useContext(LocaleContext);

  return (
    <Icon
      name={locale === 'ar' ? 'arrow-up-left-01' : 'arrow-up-right-01'}
      className="size-5 shrink-0 motion-safe:transition-transform motion-safe:duration-250 motion-safe:group-hover:translate-x-0.75 motion-safe:group-hover:-translate-y-0.75 motion-safe:group-focus-visible:translate-x-0.75 motion-safe:group-focus-visible:-translate-y-0.75 motion-safe:rtl:group-hover:-translate-x-0.75 motion-safe:rtl:group-focus-visible:-translate-x-0.75"
    />
  );
}
