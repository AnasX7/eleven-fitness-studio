import { useTranslations } from '../../i18n/useTranslations';
import TrainerCard from '../cards/TrainerCard';

export default function TrainersSection({ trainers }) {
  const t = useTranslations('TrainersSection');

  return (
    <section
      className="relative bg-surface py-12 before:pointer-events-none before:absolute before:top-0 before:left-1/2 before:w-[100cqw] before:-translate-x-1/2 before:border-t before:border-border md:py-16 lg:py-20"
      id="trainers"
      aria-labelledby="trainers-title"
    >
      <div className="mx-auto w-full max-w-312 px-5 md:px-6">
        <div className="mb-8 max-w-195">
          <h2 id="trainers-title">
            {t('title')}
          </h2>
          <p className="mt-3 max-w-[52ch] text-muted">
            {t('description')}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6 @max-[36rem]:grid-cols-1">
          {trainers.length === 0 && <p className="text-muted">{t('empty')}</p>}
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </div>
    </section>
  );
}
