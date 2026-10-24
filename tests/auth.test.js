import assert from 'node:assert/strict';
import { randomBytes, randomUUID } from 'node:crypto';
import test from 'node:test';
import { eq } from 'drizzle-orm';
import { db } from '../src/db/index.js';
import { account, user } from '../src/db/schema.js';
import { seedStudio } from '../src/db/seed.js';

test('signup, password validation, database sessions, seed safety, and logout', {
  skip: !process.env.TEST_DATABASE_URL || !process.env.BETTER_AUTH_SECRET || !process.env.BETTER_AUTH_URL,
}, async () => {
  assert.equal(process.env.DATABASE_URL, process.env.TEST_DATABASE_URL, 'Use the disposable database as DATABASE_URL.');
  const { auth } = await import('../src/lib/auth.js');
  const email = `test-${randomUUID()}@example.com`;
  const password = randomBytes(24).toString('base64');
  const origin = process.env.BETTER_AUTH_URL;
  let userId;

  async function request(path, body, cookie, requestOrigin = origin) {
    const headers = { origin: requestOrigin };
    if (body) headers['content-type'] = 'application/json';
    if (cookie) headers.cookie = cookie;
    return auth.handler(new Request(`${origin}/api/auth${path}`, {
      method: body ? 'POST' : 'GET',
      headers,
      body: body ? JSON.stringify(body) : undefined,
    }));
  }

  try {
    const rejected = await request('/sign-up/email', { name: 'Test', email, password: 'short' });
    assert.equal(rejected.status, 400);

    const signup = await request('/sign-up/email', { name: 'Test Member', email, password });
    assert.equal(signup.status, 200, await signup.clone().text());
    const created = await signup.json();
    userId = created.user.id;
    const cookie = signup.headers.getSetCookie().map((value) => value.split(';')[0]).join('; ');
    assert.ok(cookie.includes('session_token='));
    assert.ok(signup.headers.getSetCookie().some((value) => /httponly/i.test(value)));

    const [credential] = await db.select().from(account).where(eq(account.userId, userId));
    assert.ok(credential.password && credential.password !== password);
    assert.ok(!JSON.stringify(created.user).includes(credential.password));

    const duplicate = await request('/sign-up/email', { name: 'Duplicate', email, password });
    assert.ok(duplicate.status >= 400);
    const wrongPassword = await request('/sign-in/email', { email, password: 'wrong-password' });
    assert.equal(wrongPassword.status, 401);

    await seedStudio(db);
    const active = await (await request('/get-session', undefined, cookie)).json();
    assert.equal(active.user.id, userId);
    assert.ok(new Date(active.session.expiresAt) > new Date());

    const deniedOrigin = await request('/sign-out', {}, cookie, 'https://untrusted.example');
    assert.equal(deniedOrigin.status, 403);
    assert.equal((await request('/sign-out', {}, cookie)).status, 200);
    assert.equal(await (await request('/get-session', undefined, cookie)).json(), null);

    const login = await request('/sign-in/email', { email, password });
    assert.equal(login.status, 200);
    const freshCookie = login.headers.getSetCookie().map((value) => value.split(';')[0]).join('; ');
    assert.equal((await (await request('/get-session', undefined, freshCookie)).json()).user.id, userId);
  } finally {
    if (userId) await db.delete(user).where(eq(user.id, userId));
    await db.$client.end();
  }
});
