// Smoke check, no API key needed: `npm run check`
import assert from 'node:assert/strict';
import { rollDice } from './mastra/index.ts';

const { rolls, total } = (await rollDice.execute!({ count: 5, sides: 6 }, {} as never)) as {
  rolls: number[];
  total: number;
};

assert.equal(rolls.length, 5);
assert.ok(rolls.every(r => r >= 1 && r <= 6), `out of range: ${rolls}`);
assert.equal(total, rolls.reduce((a, b) => a + b, 0));
console.log('ok', rolls, total);
