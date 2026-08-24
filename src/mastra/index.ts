import { Mastra } from '@mastra/core/mastra';
import { Agent } from '@mastra/core/agent';
import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const rollDice = createTool({
  id: 'roll-dice',
  description: 'Roll N dice with the given number of sides and return each result.',
  inputSchema: z.object({
    count: z.number().int().min(1).max(20).default(1),
    sides: z.number().int().min(2).max(100).default(6),
  }),
  outputSchema: z.object({ rolls: z.array(z.number()), total: z.number() }),
  execute: async ({ count, sides }) => {
    const rolls = Array.from({ length: count }, () => 1 + Math.floor(Math.random() * sides));
    return { rolls, total: rolls.reduce((a, b) => a + b, 0) };
  },
});

export const testAgent = new Agent({
  id: 'test-agent',
  name: 'test-agent',
  instructions:
    'You are a test agent for exploring Mastra. Be brief. Use the roll-dice tool whenever dice are involved instead of inventing numbers.',
  model: 'anthropic/claude-sonnet-5',
  tools: { rollDice },
});

export const mastra = new Mastra({
  agents: { testAgent },
});
