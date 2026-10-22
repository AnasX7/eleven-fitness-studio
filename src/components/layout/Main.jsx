import Hero from '../sections/Hero';
import ScheduleSection from '../sections/ScheduleSection';
import TrainersSection from '../sections/TrainersSection';
import MembershipSection from '../sections/MembershipSection';

export default function Main() {
  const t = useTranslations('StudioData');
  const [studio, setStudio] = useState(null);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadStudio() {
      try {
        const [classes, trainers, memberships] = await Promise.all(
          ['classes', 'trainers', 'memberships'].map(async (resource) => {
            const response = await fetch(`/api/${resource}`, { signal: controller.signal });
            if (!response.ok) throw new Error('Studio request failed.');
            const rows = await response.json();
            if (!Array.isArray(rows)) throw new Error('Invalid studio response.');
            return rows;
          }),
        );
        setStudio({ classes, trainers, memberships });
      } catch {
        if (!controller.signal.aborted) setFailed(true);
      }
    }

    loadStudio();
    return () => controller.abort();
  }, [attempt]);

  function handleRetry() {
    setFailed(false);
    setAttempt((previous) => previous + 1);
  }

  return (
    <main className="mx-auto w-full max-w-312 border-x border-border">
      <Hero />
      {!studio && (
        <div className="px-5 py-12 text-center" role={failed ? 'alert' : 'status'}>
          <p>{t(failed ? 'error' : 'loading')}</p>
          {failed && (
            <button
              type="button"
              onClick={handleRetry}
              className="mt-4 min-h-11 cursor-pointer rounded-full bg-accent px-6 py-2 font-bold text-background"
            >
              {t('retry')}
            </button>
          )}
        </div>
      )}
      {studio && (
        <>
          <ScheduleSection classes={studio.classes} trainers={studio.trainers} />
          <TrainersSection trainers={studio.trainers} />
          <MembershipSection memberships={studio.memberships} />
        </>
      )}
    </main>
  );
}
import { useEffect, useState } from 'react';
import { useTranslations } from '../../i18n/useTranslations';
