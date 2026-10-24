import pg from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

// Reuse the pool during Next.js development reloads.
const pool = globalThis.studioPool ??= new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  max: 5,
  connectionTimeoutMillis: 10000,
});

export const db = drizzle(pool);
