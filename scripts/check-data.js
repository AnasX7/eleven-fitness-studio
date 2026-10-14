import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { categories, classes, trainers, memberships, navigation } from '../src/data/studio.js';
import { messages } from '../src/messages/index.js';

for (const items of [categories, classes, trainers, memberships, navigation]) {
  assert.equal(new Set(items.map((item) => item.id)).size, items.length, 'IDs must be unique');
}
assert.equal(classes.length, 5);
assert.equal(trainers.length, 3);
assert.deepEqual(memberships.map((plan) => plan.price), [199, 349, 499]);
for (const session of classes) {
  assert.ok(trainers.some((trainer) => trainer.id === session.trainerId), 'Class needs a trainer');
  assert.ok(categories.some((category) => category.id !== 'all' && category.id === session.category), 'Class needs a filter category');
}
for (const trainer of trainers) {
  assert.ok(existsSync(new URL(`../public${trainer.image}`, import.meta.url)), 'Image must exist');
}
for (const plan of memberships) {
  assert.equal(new Set(plan.features.map((feature) => feature.id)).size, plan.features.length);
}
assert.deepEqual(Object.keys(messages.en).sort(), Object.keys(messages.ar).sort());
for (const namespace of Object.keys(messages.en)) {
  assert.deepEqual(Object.keys(messages.en[namespace]).sort(), Object.keys(messages.ar[namespace]).sort());
}
for (const locale of ['en', 'ar']) {
  const text = [
    ...Object.values(messages[locale]).flatMap(Object.values),
    ...classes.flatMap((item) => ['day', 'time', 'title', 'description', 'details'].map((key) => item[key][locale])),
    ...trainers.flatMap((item) => ['name', 'specialty', 'description', 'imageAlt'].map((key) => item[key][locale])),
    ...memberships.flatMap((plan) => [plan.name[locale], plan.description[locale], ...plan.features.map((feature) => feature.text[locale])]),
    ...navigation.map((link) => link.label[locale]),
    ...categories.map((category) => category.label[locale]),
  ];
  assert.ok(text.every((value) => typeof value === 'string' && value.trim()), 'Both translations must be complete');
}
console.log('Studio data checks passed.');
