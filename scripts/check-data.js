import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { classes, trainers, memberships, navigation, ui } from '../src/data/studio.js';

for (const items of [classes, trainers, memberships, navigation]) {
  assert.equal(new Set(items.map((item) => item.id)).size, items.length, 'IDs must be unique');
}
assert.equal(classes.length, 5);
assert.equal(trainers.length, 3);
assert.deepEqual(memberships.map((plan) => plan.price), [199, 349, 499]);
for (const session of classes) {
  assert.ok(trainers.some((trainer) => trainer.id === session.trainerId), 'Class needs a trainer');
}
for (const trainer of trainers) {
  assert.ok(existsSync(new URL(`../public${trainer.image}`, import.meta.url)), 'Image must exist');
}
for (const plan of memberships) {
  assert.equal(new Set(plan.features.map((feature) => feature.id)).size, plan.features.length);
}
assert.deepEqual(Object.keys(ui.en).sort(), Object.keys(ui.ar).sort());
for (const language of ['en', 'ar']) {
  const text = [
    ...Object.values(ui[language]),
    ...classes.flatMap((item) => ['day', 'time', 'title', 'description', 'details'].map((key) => item[key][language])),
    ...trainers.flatMap((item) => ['name', 'specialty', 'description', 'imageAlt'].map((key) => item[key][language])),
    ...memberships.flatMap((plan) => [plan.name[language], plan.description[language], ...plan.features.map((feature) => feature.text[language])]),
    ...navigation.map((link) => link.label[language]),
  ];
  assert.ok(text.every((value) => typeof value === 'string' && value.trim()), 'Both translations must be complete');
}
console.log('Studio data checks passed.');
