import { useTranslations } from '../../i18n/useTranslations';

export default function QueryStatus({ isLoading, error, refetch }) {
  const t = useTranslations('StudioData');

  if (!isLoading && !error) return null;

  return (
    <div className="py-8 text-center" role={error ? 'alert' : 'status'}>
      <p>{t(error ? 'error' : 'loading')}</p>
      {error && (
        <button
          type="button"
          onClick={refetch}
          className="mt-4 min-h-11 cursor-pointer rounded-full bg-accent px-6 py-2 font-bold text-background"
        >
          {t('retry')}
        </button>
      )}
    </div>
  );
}
