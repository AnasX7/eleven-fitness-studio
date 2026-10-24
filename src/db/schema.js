import { sql } from 'drizzle-orm';
import { boolean, check, index, integer, jsonb, pgTable, text, timestamp, unique } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').notNull().default(false),
  image: text('image'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  token: text('token').notNull().unique(),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
}, (table) => [index('session_user_id_idx').on(table.userId)]);

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  password: text('password'),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at'),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
  scope: text('scope'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}, (table) => [
  index('account_user_id_idx').on(table.userId),
  unique('account_provider_account_unique').on(table.providerId, table.accountId),
]);

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}, (table) => [index('verification_identifier_idx').on(table.identifier)]);

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
