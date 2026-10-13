import Icon from './Icon';

export default function ArrowIcon({ language }) {
  return (
    <Icon
      name={language === 'ar' ? 'arrow-up-left-01' : 'arrow-up-right-01'}
      className="size-5 shrink-0 motion-safe:transition-transform motion-safe:duration-250 motion-safe:group-hover:translate-x-[3px] motion-safe:group-hover:-translate-y-[3px] motion-safe:group-focus-visible:translate-x-[3px] motion-safe:group-focus-visible:-translate-y-[3px] motion-safe:rtl:group-hover:-translate-x-[3px] motion-safe:rtl:group-focus-visible:-translate-x-[3px]"
    />
  );
}
