import assert from 'node:assert/strict';
import test from 'node:test';
import { normalizeLocale } from '../src/i18n/locale.js';
import { messages } from '../src/messages/index.js';

test('only supported language cookies are accepted', () => {
  assert.equal(normalizeLocale('ar'), 'ar');
  for (const value of ['en', '', 'fr', 'AR', '<script>', undefined, null]) {
    assert.equal(normalizeLocale(value), 'en');
  }
});

test('English and Arabic have matching translation keys', () => {
  for (const namespace of Object.keys(messages.en)) {
    assert.deepEqual(
      Object.keys(messages.ar[namespace]).sort(),
      Object.keys(messages.en[namespace]).sort(),
      namespace,
    );
  }
  assert.deepEqual(Object.keys(messages.en).sort(), Object.keys(messages.ar).sort());
});
