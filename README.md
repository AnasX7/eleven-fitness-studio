# ELEVEN Fitness Studio

Assignment 3 extends the existing React/Tailwind studio site with Next.js, Neon Postgres, Drizzle ORM, and Better Auth. English/Arabic translations, the dark/lime design, class filters, membership estimates, and local assets are preserved. All application code is JavaScript.

**Live site:** [eleven-fitness-studio.vercel.app](https://eleven-fitness-studio.vercel.app)

**Repository:** [AnasX7/eleven-fitness-studio](https://github.com/AnasX7/eleven-fitness-studio)

## Run locally

Use Node.js 24.x and npm. Next.js requires a server; this is not a static export.

```sh
npm ci
cp .env.example .env
```

Fill in the ignored `.env` file:

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | Neon pooled PostgreSQL connection string, including its SSL parameters |
| `BETTER_AUTH_SECRET` | Random secret of at least 32 characters |
| `BETTER_AUTH_URL` | `http://localhost:3000` locally; the public site origin in production |

Generate a secret locally with `openssl rand -base64 32`. Never commit it, put it in a `NEXT_PUBLIC_` variable, or paste it into an issue.

```sh
npm run db:migrate
npm run db:seed
npm run dev
```

Open [localhost:3000](http://localhost:3000). The seed inserts or updates three trainers, five classes, and three membership plans.

## Folder structure

```text
src/
  app/
    layout.jsx                  Cookie-based language, metadata, shared header/footer
    page.jsx                    Homepage and browser-side API fetching
    globals.css                 Tailwind theme, fonts, and base styles
    login/page.jsx              Login page
    signup/page.jsx             Signup page
    api/
      classes/route.js          GET /api/classes
      trainers/route.js         GET /api/trainers
      memberships/route.js      GET /api/memberships
      auth/[...all]/route.js    Better Auth GET/POST handlers
  components/
    auth/                       Shared AuthForm and header AuthControls
    layout/                     Header, Footer, MobileMenu
    sections/                   Hero, ScheduleSection, TrainersSection, MembershipSection
    cards/                      ClassCard, TrainerCard, MembershipCard
    ui/                         Existing shared controls and icons
  db/
    index.js                    Shared PostgreSQL pool and Drizzle connection
    schema.js                   Studio and authentication tables
    seed-data.js                Original bilingual studio content
    seed.js                     Transactional seed script
  context/                      Existing LocaleContext and LocaleProvider
  i18n/                         Translation hook and cookie locale helpers
  messages/                     English and Arabic interface dictionaries
  config/navigation.js          Shared navigation section IDs
  lib/
    auth.js                     Server-side Better Auth configuration
    auth-client.js              Browser-side Better Auth client

drizzle/                        Generated SQL migrations and schema snapshots
tests/                          Node test runner checks
public/assets/                  Existing local images, fonts, and icons
drizzle.config.js               Migration configuration
postcss.config.mjs              Tailwind/PostCSS integration
vercel.json                     Next.js build/deployment configuration
.env.example                    Safe environment placeholders
```

## How the data flows

The homepage in `src/app/page.jsx` fetches `/api/classes`, `/api/trainers`, and `/api/memberships` in parallel after mounting. Each route uses Drizzle to read its own Postgres table and returns an ordered JSON array. The results are passed to the existing sections as props. No studio content is imported into the frontend bundle.

The page shows loading, error/retry, and empty states. Failed HTTP responses are checked before parsing data; requests are cancelled when the component unmounts. Class filtering and membership quantities remain local React state. Database prices are integer fils: `19900` represents AED 199. Estimates multiply the integer amount before converting it for display; the calculator does not purchase a membership.

| Method | Endpoint | Response |
| --- | --- | --- |
| GET | `/api/classes` | Five weekly sessions, including bilingual text and trainer IDs |
| GET | `/api/trainers` | Three bilingual trainer profiles and local image paths |
| GET | `/api/memberships` | Plans, integer prices, bilingual features, featured status |
| GET/POST | `/api/auth/*` | Better Auth signup, login, session, and logout endpoints |

Content endpoints are public and read-only. Database failures return a generic `503` JSON error without credentials or database details. Content caching and an admin editor are outside this assignment's scope.

## Database schema in plain English

| Table | What a row represents |
| --- | --- |
| `trainers` | One coach, with bilingual profile text and an image |
| `classes` | One weekly class session, linked to an existing trainer |
| `memberships` | One membership plan, its price in fils, and its features |
| `user` | One registered person's name, unique email, and account timestamps |
| `account` | A login method belonging to a user; email/password credentials contain a password hash |
| `session` | A user's active login token and expiry; the browser's session cookie identifies this record |
| `verification` | Better Auth's verification records when a configured flow needs them |

Bilingual content uses JSONB values such as `{ "en": "Maya Rao", "ar": "مايا راو" }`. Separate columns hold IDs, trainer references, categories, prices, and display order. Foreign keys prevent classes referencing missing trainers and prevent deleting an assigned trainer. Check constraints reject invalid categories, invalid 24-hour times, and negative prices.

Better Auth owns credential validation, password hashing, session cookies, and session expiry. The application never hashes passwords itself or stores login tokens in localStorage. `AuthControls` reads the session through Better Auth and shows the signed-in name and Sign out button. Signup signs in the new account; login survives a full page refresh. Logout revokes the session. Email verification, password reset emails, social login, payments, and admin roles are not configured.

## Language without next-intl

The existing `useTranslations(namespace)` hook reads the English/Arabic dictionaries through `LocaleContext`. Navigation and class-filter labels also live in those dictionaries; the shared navigation configuration contains section IDs only. Routes stay `/`, `/login`, and `/signup`.

The root layout reads a `locale` cookie, accepts only `en` or `ar`, and defaults to English. It renders the correct language, text direction, and metadata, then passes the same initial locale into the client provider. Saved Arabic therefore renders correctly even before JavaScript runs.

The language button updates state immediately, saves a one-year cookie, and refreshes server output. The cookie uses `Path=/`, `SameSite=Lax`, and `Secure` on HTTPS. It is browser-accessible because it stores a preference, not an authentication credential. It replaces the old localStorage preference. Switching language preserves current filters and membership quantities; quantities reset on a full reload.

Reading the language cookie makes the layout render per request. Studio content still loads through the GET endpoints in the browser. Better Auth's session cookie is separate from the language cookie.

## Content updates and migrations

Edit `src/db/seed-data.js`, including both translations, then run:

```sh
npm run db:seed
```

The seed uses stable IDs and one transaction. It inserts new IDs and updates existing IDs, without deleting other rows or modifying users/sessions. Removing an item from the seed file does not delete its database row. Preserve trainer references when changing classes.

When changing table definitions:

```sh
npm run db:generate
npm run db:migrate
```

Review and commit the generated SQL in `drizzle/`. Apply migrations before deploying code that depends on them. `npm run db:studio` opens Drizzle's table browser for local development; it is not a public admin dashboard.

## Validation

```sh
npm run lint
npm test
npm run build
npm start
```

`npm test` runs unit checks and safely skips database integration tests when no test database is configured. For all eight checks, use a separate disposable Postgres database. Put its connection string in both `DATABASE_URL` and `TEST_DATABASE_URL` in an ignored `.env.test`, alongside a random `BETTER_AUTH_SECRET` and `BETTER_AUTH_URL=http://localhost:3000`. Then run:

```sh
node --env-file=.env.test node_modules/drizzle-kit/bin.cjs migrate
node --env-file=.env.test src/db/seed.js
node --env-file=.env.test --test --test-concurrency=1
```

Do not point integration tests at production. They exercise seed writes and create/delete temporary accounts. Checks cover seed repeatability, preservation of other rows, foreign keys, price constraints, ordered bilingual API output, safe API errors, signup validation, password hashing, duplicate accounts, invalid credentials, origin protection, sessions, logout, supported locale values, and translation-key parity.

Before deployment, browser checks covered filtering, independent membership estimates, API failure/retry and empty states, signup/login/logout, refresh persistence, Arabic before JavaScript, invalid-cookie fallback, state preservation during language changes, and overflow at 375px, 768px, and 1440px.

The public production site was also checked through anonymous HTTP requests and a fresh browser session: all three APIs returned the seeded rows; signup/login/logout and refresh persistence worked; the session cookie was Secure and HttpOnly; language persistence, filters, estimates, navigation, and responsive widths passed. Temporary production test accounts were removed afterward.

The build uses Next.js's supported Webpack option because Turbopack's CSS worker was blocked in the local execution environment. The targeted esbuild override patches a vulnerable legacy dependency of Drizzle tooling; clean installation, migration generation, and the production build were verified with it.

## Deployment

The existing `eleven-fitness-studio` Vercel project hosts both Next.js pages and API routes. Its Neon integration provisions the Postgres database on the free plan in `iad1`. Neon's separate authentication feature is disabled because this app uses Better Auth.

Configure production `DATABASE_URL`, a production-only `BETTER_AUTH_SECRET`, and `BETTER_AUTH_URL=https://eleven-fitness-studio.vercel.app` in Vercel. Development uses its own auth secret and localhost URL. Preview deployments need their own environment configuration before their database/auth features can be used.

After applying database migrations and seeding the intended content:

```sh
npx vercel --prod
```

`vercel.json` selects Next.js, runs `npm ci` and `npm run build`, and uses `.next` output. There is no separate Express server or Railway deployment.

`.env*`, `.vercel/`, `.next/`, and `node_modules/` are git-ignored; `.env.example` is intentionally tracked. Local Vercel linking may create an ignored `.env.local` with an OIDC token. Never commit generated environment files.

## Assets and earlier work

The existing fictional studio photography, local Thmanyah Sans fonts, and [Hugeicons Stroke Rounded](https://hugeicons.com/icons/stroke-rounded) icons are preserved. The upstream icon MIT license remains at `public/assets/icons/LICENSE.txt`. `legacy/html-css` preserves the original HTML/CSS implementation; Week 2's React/Tailwind work remains in Git history.
