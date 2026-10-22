async (page) => {
  const origin = 'http://localhost:3000';
  await page.context().clearCookies();
  const sections = { classes: '#schedule', trainers: '#trainers', memberships: '#membership' };
  const cards = { classes: '[data-class-id]', trainers: 'article', memberships: 'article' };
  const rows = {};
  const modes = {};
  const calls = {};
  const errors = [];
  let heldRoute;
  const check = (condition, message) => { if (!condition) throw new Error(message); };

  for (const resource of Object.keys(sections)) {
    const response = await page.request.get(`${origin}/api/${resource}`);
    check(response.ok(), `Seeded ${resource} endpoint must be available`);
    rows[resource] = await response.json();
    check(rows[resource].length > 0, `Seed ${resource} before running this check`);
    modes[resource] = 'success';
    calls[resource] = 0;
  }

  const intercept = async (route) => {
    const resource = route.request().url().split('/').pop();
    calls[resource] += 1;
    const mode = modes[resource];
    if (mode === 'hold') { heldRoute = route; return; }
    if (mode === 'network-error') return route.abort('failed');
    if (mode === 'http-error') return route.fulfill({ status: 503, json: { error: 'Unavailable' } });
    if (mode === 'invalid-json') return route.fulfill({ contentType: 'application/json', body: '{' });
    const json = mode === 'empty' ? [] : mode === 'invalid-shape' ? {} : rows[resource];
    await route.fulfill({ json });
  };
  const pattern = /\/api\/(classes|trainers|memberships)$/;
  const onError = (error) => errors.push(error.message);
  page.on('pageerror', onError);
  await page.route(pattern, intercept);

  async function expectCards(resource) {
    const list = page.locator(sections[resource]).locator(cards[resource]);
    await list.first().waitFor();
    check(await list.count() === rows[resource].length, `${resource} card count`);
  }

  try {
    for (const failed of Object.keys(sections)) {
      modes[failed] = 'http-error';
      await page.goto(origin);
      const section = page.locator(sections[failed]);
      await section.getByRole('alert').waitFor();
      for (const resource of Object.keys(sections).filter((key) => key !== failed)) {
        await expectCards(resource);
      }
      const before = { ...calls };
      modes[failed] = 'success';
      await section.getByRole('button', { name: 'Try again', exact: true }).click();
      await expectCards(failed);
      for (const resource of Object.keys(sections)) {
        check(calls[resource] === before[resource] + Number(resource === failed), 'Retry must only fetch its own endpoint');
      }
    }

    modes.memberships = 'hold';
    await page.goto(origin);
    await expectCards('classes');
    await expectCards('trainers');
    await page.locator('#membership').getByRole('status').waitFor();
    check(heldRoute, 'Membership request is pending while other sections render');
    await heldRoute.fulfill({ json: rows.memberships });
    await expectCards('memberships');
    modes.memberships = 'success';

    for (const mode of ['network-error', 'invalid-json', 'invalid-shape']) {
      modes.classes = mode;
      await page.goto(origin);
      await page.locator('#schedule').getByRole('alert').waitFor();
      await expectCards('trainers');
      await expectCards('memberships');
    }
    modes.classes = 'success';

    for (const resource of Object.keys(sections)) modes[resource] = 'empty';
    await page.goto(origin);
    for (const text of [
      'No classes are scheduled in this category.',
      'Trainer information will be available soon.',
      'Membership plans will be available soon.',
    ]) await page.getByText(text, { exact: true }).waitFor();

    for (const resource of Object.keys(sections)) modes[resource] = 'success';
    await page.goto(origin);
    await expectCards('classes');
    await expectCards('memberships');
    await page.getByRole('button', { name: 'Strength', exact: true }).click();
    check(await page.locator('[data-class-id]').count() === 2, 'Class filter');
    const regular = page.locator('article[aria-labelledby="regular-title"]');
    await regular.getByRole('button', { name: 'Increase quantity' }).click();
    await page.getByRole('button', { name: 'عرض الموقع بالعربية' }).click();
    await page.getByRole('button', { name: 'View the site in English' }).waitFor();
    check((await regular.innerText()).includes('٦٩٨'), 'Membership estimate survives language switching');
    check(await page.locator('[data-class-id]').count() === 2, 'Filter survives language switching');
    for (const width of [375, 768, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      check(await page.locator('html').evaluate((element) => element.scrollWidth <= element.clientWidth), `Overflow at ${width}px`);
    }
    await page.getByRole('button', { name: 'View the site in English' }).click();

    modes.memberships = 'hold';
    heldRoute = null;
    await page.goto(origin);
    await expectCards('classes');
    await expectCards('trainers');
    check(heldRoute, 'Membership request is pending before navigation');
    const aborted = page.waitForEvent('requestfailed', {
      predicate: (request) => request.url().endsWith('/api/memberships'),
    });
    await page.locator('header').getByRole('link', { name: 'Sign in', exact: true }).click();
    await page.waitForURL(`${origin}/login`);
    await aborted;
    await heldRoute.fulfill({ json: rows.memberships });
    check(errors.length === 0, errors.join('; '));
    return 'Independent failures, retries, slow loading, malformed responses, empty states, filters, estimates, language, responsive layout, and unmount cancellation passed.';
  } finally {
    await page.unroute(pattern, intercept);
    page.off('pageerror', onError);
  }
}
