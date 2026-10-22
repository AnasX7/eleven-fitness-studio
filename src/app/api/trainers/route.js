import { asc } from 'drizzle-orm';
import { db } from '../../../db/index.js';
import { trainers } from '../../../db/schema.js';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const rows = await db.select().from(trainers).orderBy(asc(trainers.displayOrder));
    return Response.json(rows);
  } catch (error) {
    console.error('Trainers API failed:', error.message);
    return Response.json({ error: 'Unable to load trainers.' }, { status: 503 });
  }
}
