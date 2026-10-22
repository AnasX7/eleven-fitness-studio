import { sql } from 'drizzle-orm';
import { boolean, check, integer, jsonb, pgTable, text } from 'drizzle-orm/pg-core';

export const trainers = pgTable('trainers', {
  id: text('id').primaryKey(),
  name: jsonb('name').notNull(),
  specialty: jsonb('specialty').notNull(),
  description: jsonb('description').notNull(),
  image: text('image').notNull(),
  imageAlt: jsonb('image_alt').notNull(),
  displayOrder: integer('display_order').notNull(),
});

export const classes = pgTable('classes', {
  id: text('id').primaryKey(),
  trainerId: text('trainer_id').notNull().references(() => trainers.id, { onDelete: 'restrict' }),
  category: text('category').notNull(),
  icon: text('icon').notNull(),
  timeValue: text('time_value').notNull(),
  day: jsonb('day').notNull(),
  time: jsonb('time').notNull(),
  title: jsonb('title').notNull(),
  description: jsonb('description').notNull(),
  details: jsonb('details').notNull(),
  displayOrder: integer('display_order').notNull(),
}, (table) => [
  check('classes_category', sql`${table.category} in ('strength', 'conditioning', 'mobility', 'mixed')`),
  check('classes_time', sql`${table.timeValue} ~ '^([01][0-9]|2[0-3]):[0-5][0-9]$'`),
]);

export const memberships = pgTable('memberships', {
  id: text('id').primaryKey(),
  icon: text('icon').notNull(),
  name: jsonb('name').notNull(),
  description: jsonb('description').notNull(),
  priceFils: integer('price_fils').notNull(),
  features: jsonb('features').notNull(),
  featured: boolean('featured').notNull().default(false),
  displayOrder: integer('display_order').notNull(),
}, (table) => [
  check('memberships_price_nonnegative', sql`${table.priceFils} >= 0`),
]);
