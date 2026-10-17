import { useState } from 'react';
import { useTranslations } from '../../i18n/useTranslations';
import { memberships } from '../../data/memberships';
import MembershipCard from '../cards/MembershipCard';

export default function MembershipSection() {
  const t = useTranslations('MembershipSection');
  const [quantities, setQuantities] = useState({});

  function handleQuantityChange(planId, value) {
    setQuantities((previous) => ({
      ...previous,
      [planId]: value,
    }));
  }

  return (
    <section
      className="relative py-12 before:pointer-events-none before:absolute before:top-0 before:left-1/2 before:w-[100cqw] before:-translate-x-1/2 before:border-t before:border-border md:py-16 lg:py-20"
      id="membership"
      aria-labelledby="membership-title"
    >
      <div className="mx-auto w-full max-w-[1248px] px-5 md:px-6">
        <div className="mb-8 max-w-[780px]">
          <h2 id="membership-title">
            {t('title')}
          </h2>
          <p className="mt-3 max-w-[52ch] text-muted">
            {t('description')}
          </p>
          <p className="mt-3 max-w-[60ch] text-sm text-muted">
            {t('estimatorDescription')}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6 @max-[36rem]:grid-cols-1">
          {memberships.map((plan) => (
            <MembershipCard
              key={plan.id}
              plan={plan}
              quantity={quantities[plan.id] ?? 1}
              onQuantityChange={(value) => handleQuantityChange(plan.id, value)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
