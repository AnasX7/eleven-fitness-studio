# ELEVEN Fitness Studio

The existing studio site uses Next.js App Router, React, Tailwind CSS, Drizzle ORM, PostgreSQL on Neon, and Better Auth. Application code is JavaScript. The existing English/Arabic translations and design are preserved.

## Setup

Use Node.js 24.x and npm.

1. Create a free project directly at [Neon](https://console.neon.tech).
2. In that project's **Connect** dialog, enable connection pooling and copy the PostgreSQL connection string.
3. Run `npm ci` and copy `.env.example` to `.env` if you do not already have one.
4. Fill in these three variables locally:

| Variable | Value |
| --- | --- |
| `DATABASE_URL` | Your Neon pooled connection string, including its SSL parameters |
| `BETTER_AUTH_SECRET` | A random secret generated with `openssl rand -base64 32` |
| `BETTER_AUTH_URL` | `http://localhost:3000` |

Then create the tables, insert the studio content, and start Next.js:

```sh
npm run db:migrate
npm run db:seed
npm run dev
```

Open [localhost:3000](http://localhost:3000). No Neon/Vercel marketplace integration is needed. Next.js reads `.env` automatically; the database commands load it locally as well. `.env*` is ignored by Git, except `.env.example`. Never put database credentials or auth secrets in `NEXT_PUBLIC_` variables.

## Structure

```text
src/
  app/
    layout.jsx                 Language cookie, metadata, shared header/footer
    globals.css                Tailwind theme, fonts, and global styles
    page.jsx                   Homepage and browser-side API requests
    login/page.jsx             Login page
    signup/page.jsx            Signup page
    api/
      classes/route.js         GET classes
      trainers/route.js        GET trainers
      memberships/route.js     GET membership plans
      auth/[...all]/route.js   Better Auth handlers
  components/                  Sections, cards, layout, controls, auth forms
  config/navigation.js         Shared navigation section IDs
  context/                     Existing locale context/provider
  i18n/                        Existing translation hook and locale helpers
  messages/                    English/Arabic interface labels
  db/
    index.js                   PostgreSQL pool and Drizzle instance
    schema.js                  Database tables
    seed-data.js               Bilingual content used by the seed script
    seed.js                    Database seeding
  lib/
    auth.js                    Better Auth configuration
    auth-client.js             Better Auth browser client

drizzle/                       Generated SQL migrations
tests/                         Node test runner checks
public/assets/                 Existing images, fonts, and icons
```

## Database and API

| Table | Purpose |
| --- | --- |
| `trainers` | Bilingual coach profiles and image paths |
| `classes` | Weekly sessions, each linked to an existing trainer |
| `memberships` | Bilingual plans/features and prices stored as integer fils |
| `user` | Registered people's names and unique emails |
| `account` | Login credentials, with passwords hashed by Better Auth |
| `session` | Login tokens, users, and expiry times |
| `verification` | Better Auth's verification records |

The seed contains three trainers, five classes, and three membership plans. Foreign keys protect trainer references; check constraints reject invalid categories/times and negative prices. For example, `19900` fils represents AED 199.

The homepage fetches `/api/classes`, `/api/trainers`, and `/api/memberships` in parallel in the browser. Each GET handler queries its own table with Drizzle and returns an ordered JSON array. The page passes those results to the sections and handles loading, error/retry, and empty states. Filters and membership estimates stay in local React state.

Navigation and filter labels are interface translations in `messages/`. Navigation IDs are shared configuration; database seed content is only in `db/seed-data.js`. There is no `src/data` folder.

## Authentication and language

Better Auth handles signup, login, password hashing, sessions, and logout through `/api/auth/*`. `lib/auth.js` exports its configuration directly; Better Auth reads `BETTER_AUTH_SECRET` and `BETTER_AUTH_URL` and validates its own configuration. The header uses `authClient.useSession()` to display signed-in state. Sessions survive refresh and are revoked on logout.

The existing translation hook remains in use without next-intl. The root layout reads the `locale` cookie and supplies the same initial language to the provider, avoiding an English flash for saved Arabic. The language button updates state, saves the cookie, and refreshes server metadata. Only `en` and `ar` are accepted. The cookie lasts a year, applies to `/`, uses `SameSite=Lax`, and is Secure on HTTPS. Auth uses a separate session cookie.

## Content changes

Edit both languages in `src/db/seed-data.js`, then run:

```sh
npm run db:seed
```

Seeding inserts/updates stable IDs inside a transaction. It does not modify users or delete rows removed from the seed file. For schema changes, update `schema.js`, generate a migration, review its SQL, and apply it:

```sh
npm run db:generate
npm run db:migrate
```

## Checks

```sh
npm run lint
npm test
npm run build
npm start
```

Database tests are skipped without test credentials. For all seven checks, use a separate disposable database and put its URL in both `DATABASE_URL` and `TEST_DATABASE_URL` in an ignored `.env.test`, with `BETTER_AUTH_SECRET` and `BETTER_AUTH_URL=http://localhost:3000`.

```sh
node --env-file=.env.test node_modules/drizzle-kit/bin.cjs migrate
node --env-file=.env.test src/db/seed.js
node --env-file=.env.test --test --test-concurrency=1
```

Tests cover seed repeatability, preservation of other rows, database constraints, API content/errors, signup/password validation, hashing, duplicate accounts, session persistence, origin protection, logout, locale validation, and translation-key parity. Never use production for these tests.

The Webpack build flag avoids the local environment's Turbopack CSS-worker restriction. The esbuild override patches a legacy dependency of Drizzle tooling.

## Deployment

Create and manage Neon directly. Set `DATABASE_URL` from that project, a production auth secret, and the public `BETTER_AUTH_URL` in the hosting provider's environment settings. Apply migrations and seed the intended database before deploying. Vercel can host the Next.js app and its API together; `vercel.json` only selects the Next.js framework for the existing project.

The previous live deployment still uses the earlier Vercel-managed database. This cleanup is local; switching that deployment to your standalone Neon project requires your new credentials and a redeploy. The old database has not been deleted.

Admin editing, caching, payments, social login, and email verification/reset flows are outside the agreed scope.

## Assets

Existing fictional studio photography and local Thmanyah Sans fonts are preserved. Icons are [Hugeicons Stroke Rounded](https://hugeicons.com/icons/stroke-rounded); the MIT license is at `public/assets/icons/LICENSE.txt`. Earlier HTML/CSS and React/Vite implementations remain in Git history.
