'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '../../lib/auth-client';
import { useTranslations } from '../../i18n/useTranslations';

export default function AuthForm({ mode }) {
  const t = useTranslations('Auth');
  const router = useRouter();
  const signup = mode === 'signup';
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setPending(true);
    setError(null);

    try {
      const email = String(form.get('email')).trim();
      const password = String(form.get('password'));
      const result = signup
        ? await authClient.signUp.email({ name: String(form.get('name')).trim(), email, password })
        : await authClient.signIn.email({ email, password });

      if (result.error) {
        if (result.error.code === 'INVALID_EMAIL_OR_PASSWORD') setError('invalidCredentials');
        else if (['USER_ALREADY_EXISTS', 'USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL'].includes(result.error.code)) setError('accountExists');
        else setError('requestFailed');
        return;
      }

      router.replace('/');
      router.refresh();
    } catch {
      setError('requestFailed');
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="mx-auto min-h-[60vh] w-full max-w-312 border-x border-border px-5 py-12 md:py-20">
      <div className="mx-auto w-full max-w-md">
        <h1 className="text-3xl font-black md:text-4xl">{t(signup ? 'signupTitle' : 'loginTitle')}</h1>
        <p className="mt-3 text-muted">{t(signup ? 'signupDescription' : 'loginDescription')}</p>
        <form className="mt-8 grid gap-5" onSubmit={handleSubmit} aria-busy={pending}>
          {signup && <Field label={t('name')} name="name" type="text" autoComplete="name" maxLength={100} required />}
          <Field label={t('email')} name="email" type="email" autoComplete="email" maxLength={254} dir="ltr" required />
          <Field
            label={t('password')}
            name="password"
            type="password"
            autoComplete={signup ? 'new-password' : 'current-password'}
            minLength={8}
            maxLength={128}
            hint={t('passwordHint')}
            dir="ltr"
            required
          />
          {error && <p role="alert" className="rounded-2xl border border-border bg-surface p-4">{t(error)}</p>}
          <button
            type="submit"
            disabled={pending}
            className="min-h-12 cursor-pointer rounded-full bg-accent px-6 py-3 font-bold text-background hover:bg-accent-hover disabled:cursor-wait disabled:opacity-60"
          >
            {t(pending ? 'pending' : signup ? 'signup' : 'login')}
          </button>
        </form>
        <p className="mt-6 text-muted">
          {t(signup ? 'hasAccount' : 'newAccount')}{' '}
          <Link href={signup ? '/login' : '/signup'} className="inline-flex min-h-11 items-center text-accent underline underline-offset-4">
            {t(signup ? 'login' : 'signup')}
          </Link>
        </p>
      </div>
    </main>
  );
}

function Field({ label, name, hint, ...props }) {
  return (
    <div>
      <label htmlFor={name} className="block font-bold">{label}</label>
      <input
        {...props}
        id={name}
        name={name}
        aria-describedby={hint ? `${name}-hint` : undefined}
        className="mt-2 min-h-12 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-text"
      />
      {hint && <p id={`${name}-hint`} className="mt-2 text-sm text-muted">{hint}</p>}
    </div>
  );
}
