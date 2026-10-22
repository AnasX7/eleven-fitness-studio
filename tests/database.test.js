import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import test from 'node:test';
import pg from 'pg';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/node-postgres';
import { classes, memberships, trainers } from '../src/db/schema.js';
import { classData, membershipData, trainerData } from '../src/db/seed-data.js';
import { seedStudio } from '../src/db/seed.js';

test('seed data has unique IDs, valid trainers, and integer prices', () => {
  for (const rows of [trainerData, classData, membershipData]) {
    assert.equal(new Set(rows.map((row) => row.id)).size, rows.length);
  }
  for (const row of classData) {
    assert.ok(trainerData.some((trainer) => trainer.id === row.trainerId));
    assert.ok(row.title.en && row.title.ar);
  }
  for (const plan of membershipData) {
    assert.ok(Number.isSafeInteger(plan.priceFils) && plan.priceFils >= 0);
  }
});

test('Postgres seed is repeatable, preserves other rows, and enforces constraints', {
  skip: !process.env.TEST_DATABASE_URL,
}, async () => {
  const pool = new pg.Pool({ connectionString: process.env.TEST_DATABASE_URL });
  const db = drizzle(pool);
  const extraId = `test-${randomUUID()}`;

  try {
    await seedStudio(db);
    await db.insert(trainers).values({ ...trainerData[0], id: extraId, displayOrder: 99 });
    await seedStudio(db);

    assert.equal((await db.select().from(classes)).length, classData.length);
    assert.equal((await db.select().from(memberships)).length, membershipData.length);
    assert.equal((await db.select().from(trainers).where(eq(trainers.id, extraId))).length, 1);

    await assert.rejects(
      db.delete(trainers).where(eq(trainers.id, classData[0].trainerId)),
      (error) => error.cause?.constraint === 'classes_trainer_id_trainers_id_fk',
    );
    await assert.rejects(
      db.update(memberships).set({ priceFils: -1 }).where(eq(memberships.id, membershipData[0].id)),
      (error) => error.cause?.constraint === 'memberships_price_nonnegative',
    );
    await assert.rejects(
      db.insert(classes).values({ ...classData[0], id: randomUUID(), trainerId: 'missing', displayOrder: 99 }),
      (error) => error.cause?.constraint === 'classes_trainer_id_trainers_id_fk',
    );
  } finally {
    await db.delete(trainers).where(eq(trainers.id, extraId));
    await pool.end();
  }
});
