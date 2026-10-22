CREATE TABLE "classes" (
	"id" text PRIMARY KEY NOT NULL,
	"trainer_id" text NOT NULL,
	"category" text NOT NULL,
	"icon" text NOT NULL,
	"time_value" text NOT NULL,
	"day" jsonb NOT NULL,
	"time" jsonb NOT NULL,
	"title" jsonb NOT NULL,
	"description" jsonb NOT NULL,
	"details" jsonb NOT NULL,
	"display_order" integer NOT NULL,
	CONSTRAINT "classes_category" CHECK ("classes"."category" in ('strength', 'conditioning', 'mobility', 'mixed')),
	CONSTRAINT "classes_time" CHECK ("classes"."time_value" ~ '^([01][0-9]|2[0-3]):[0-5][0-9]$')
);
--> statement-breakpoint
CREATE TABLE "memberships" (
	"id" text PRIMARY KEY NOT NULL,
	"icon" text NOT NULL,
	"name" jsonb NOT NULL,
	"description" jsonb NOT NULL,
	"price_fils" integer NOT NULL,
	"features" jsonb NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"display_order" integer NOT NULL,
	CONSTRAINT "memberships_price_nonnegative" CHECK ("memberships"."price_fils" >= 0)
);
--> statement-breakpoint
CREATE TABLE "trainers" (
	"id" text PRIMARY KEY NOT NULL,
	"name" jsonb NOT NULL,
	"specialty" jsonb NOT NULL,
	"description" jsonb NOT NULL,
	"image" text NOT NULL,
	"image_alt" jsonb NOT NULL,
	"display_order" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "classes" ADD CONSTRAINT "classes_trainer_id_trainers_id_fk" FOREIGN KEY ("trainer_id") REFERENCES "public"."trainers"("id") ON DELETE restrict ON UPDATE no action;