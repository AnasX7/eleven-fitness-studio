import pg from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

export function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error('Set DATABASE_URL in .env before using the database.');
  }

  // Reuse the connection pool across Next.js development reloads.
  if (!globalThis.studioDb) {
    const pool = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
      max: 5,
      connectionTimeoutMillis: 10000,
    });
    globalThis.studioDb = drizzle(pool);
  }

  return globalThis.studioDb;
}
