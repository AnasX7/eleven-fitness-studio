import { asc } from 'drizzle-orm';
import { getDb } from '../../../db/index.js';
import { classes } from '../../../db/schema.js';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const rows = await getDb().select().from(classes).orderBy(asc(classes.displayOrder));
    return Response.json(rows);
  } catch (error) {
    console.error('Classes API failed:', error.message);
    return Response.json({ error: 'Unable to load classes.' }, { status: 503 });
  }
}
