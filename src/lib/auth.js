import { betterAuth } from 'better-auth';
import { drizzleAdapter } from '@better-auth/drizzle-adapter';
import { getDb } from '../db/index.js';
import { user, session, account, verification } from '../db/schema.js';

let auth;

export function getAuth() {
  if (!process.env.BETTER_AUTH_URL || !process.env.BETTER_AUTH_SECRET || process.env.BETTER_AUTH_SECRET.length < 32) {
    throw new Error('Set BETTER_AUTH_URL and a random BETTER_AUTH_SECRET of at least 32 characters.');
  }

  if (!auth) {
    auth = betterAuth({
      database: drizzleAdapter(getDb(), {
        provider: 'pg',
        schema: { user, session, account, verification },
      }),
      emailAndPassword: { enabled: true },
    });
  }

  return auth;
}
