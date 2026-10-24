'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '../../lib/auth-client';
import { useTranslations } from '../../i18n/useTranslations';

export default function AuthControls() {
  const t = useTranslations('Auth');
  const router = useRouter();
  const { data: session, isPending, error: sessionError, refetch } = authClient.useSession();
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);
  const controlClass = 'inline-flex min-h-11 cursor-pointer items-center rounded-full border border-border px-4 py-2 text-sm font-bold hover:bg-accent hover:text-background disabled:opacity-60';

  async function handleSignOut() {
    setPending(true);
    setFailed(false);
    try {
      const result = await authClient.signOut();
      if (result.error) {
        setFailed(true);
        return;
      }
      router.refresh();
    } catch {
      setFailed(true);
    } finally {
      setPending(false);
    }
  }

  if (isPending) return <span role="status" className="text-xs text-muted">{t('pending')}</span>;
  if (sessionError) return <button type="button" onClick={() => refetch()} className={controlClass}>{t('retrySession')}</button>;
  if (!session) return <Link href="/login" className={controlClass}>{t('login')}</Link>;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="hidden max-w-36 truncate text-sm sm:block" title={session.user.name}>{session.user.name}</span>
      <button type="button" onClick={handleSignOut} disabled={pending} className={controlClass}>
        {t(pending ? 'pending' : 'logout')}
      </button>
      {failed && <span role="alert" className="max-w-48 text-xs">{t('requestFailed')}</span>}
    </div>
  );
}
