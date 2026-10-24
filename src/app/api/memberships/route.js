import { asc } from 'drizzle-orm';
import { db } from '../../../db/index.js';
import { memberships } from '../../../db/schema.js';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const rows = await db.select().from(memberships).orderBy(asc(memberships.displayOrder));
    return Response.json(rows);
  } catch (error) {
    console.error('Memberships API failed:', error.message);
    return Response.json({ error: 'Unable to load memberships.' }, { status: 503 });
  }
}
