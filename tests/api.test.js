import assert from 'node:assert/strict';
import test from 'node:test';
import { GET as getClasses } from '../src/app/api/classes/route.js';
import { GET as getTrainers } from '../src/app/api/trainers/route.js';
import { GET as getMemberships } from '../src/app/api/memberships/route.js';

test('unconfigured APIs return a safe service error', async (t) => {
  const previous = process.env.DATABASE_URL;
  delete process.env.DATABASE_URL;
  t.mock.method(console, 'error', () => {});

  try {
    for (const handler of [getClasses, getTrainers, getMemberships]) {
      const response = await handler();
      assert.equal(response.status, 503);
      const body = await response.json();
      assert.match(body.error, /^Unable to load/);
      assert.ok(!JSON.stringify(body).includes('DATABASE_URL'));
    }
  } finally {
    if (previous === undefined) delete process.env.DATABASE_URL;
    else process.env.DATABASE_URL = previous;
  }
});

test('resource APIs return ordered, bilingual database content', {
  skip: !process.env.TEST_DATABASE_URL,
}, async () => {
  const previous = process.env.DATABASE_URL;
  process.env.DATABASE_URL = process.env.TEST_DATABASE_URL;

  try {
    const classes = await (await getClasses()).json();
    const trainers = await (await getTrainers()).json();
    const memberships = await (await getMemberships()).json();

    assert.deepEqual(classes.map((row) => row.id), [
      'mon-strength', 'tue-conditioning', 'wed-mobility', 'thu-strength', 'sat-mixed',
    ]);
    assert.deepEqual(trainers.map((row) => row.id), ['maya', 'leo', 'nina']);
    assert.deepEqual(memberships.map((row) => row.priceFils), [19900, 34900, 49900]);
    assert.ok(classes.every((row) => row.title.en && row.title.ar));
    assert.ok(classes.every((row) => trainers.some((trainer) => trainer.id === row.trainerId)));
  } finally {
    await globalThis.studioDb?.$client.end();
    if (previous === undefined) delete process.env.DATABASE_URL;
    else process.env.DATABASE_URL = previous;
  }
});
