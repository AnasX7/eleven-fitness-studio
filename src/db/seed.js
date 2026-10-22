import { fileURLToPath } from 'node:url';
import { db } from './index.js';
import { classes, memberships, trainers } from './schema.js';
import { classData, membershipData, trainerData } from './seed-data.js';

export async function seedStudio(db) {
  await db.transaction(async (tx) => {
    for (const [table, rows] of [
      [trainers, trainerData],
      [classes, classData],
      [memberships, membershipData],
    ]) {
      for (const [displayOrder, row] of rows.entries()) {
        const values = { ...row, displayOrder };
        await tx.insert(table).values(values).onConflictDoUpdate({
          target: table.id,
          set: values,
        });
      }
    }
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    await seedStudio(db);
    console.log('Seeded 3 trainers, 5 classes, and 3 memberships.');
  } finally {
    await db.$client.end();
  }
}
