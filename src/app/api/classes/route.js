import { asc, eq, getTableColumns } from 'drizzle-orm';
import { db } from '../../../db/index.js';
import { classes, trainers } from '../../../db/schema.js';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const rows = await db.select({
      ...getTableColumns(classes),
      trainer: { id: trainers.id, name: trainers.name, image: trainers.image },
    })
      .from(classes)
      .innerJoin(trainers, eq(classes.trainerId, trainers.id))
      .orderBy(asc(classes.displayOrder));
    return Response.json(rows);
  } catch (error) {
    console.error('Classes API failed:', error.message);
    return Response.json({ error: 'Unable to load classes.' }, { status: 503 });
  }
}
