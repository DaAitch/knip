import { test } from 'bun:test';
import assert from 'node:assert/strict';
import { main } from '../src/index.js';
import { resolve } from '../src/util/path.js';
import baseArguments from './helpers/baseArguments.js';

const cwd = resolve('fixtures/gitignore-scope');

test('test acceptance: cwd should contain "fixtures" in path or the test obsolete', () => {
  assert(cwd.includes('/fixtures/'))
})

test('Obey gitignore-scope logic', async () => {
  const { issues } = await main({
    ...baseArguments,
    cwd,
    gitignore: true,
  });

  assert.equal(issues.dependencies, {});
});
