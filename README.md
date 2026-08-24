# MyAgent

Test agent for exploring [Mastra](https://mastra.ai). One agent (`test-agent`) with one tool (`roll-dice`), in [src/mastra/index.ts](src/mastra/index.ts).

```bash
cp .env.example .env   # add ANTHROPIC_API_KEY
npm run dev            # Mastra Studio at http://localhost:4111
npm run check          # tool smoke test, no API key needed
```

Model is set via Mastra's model router string (`anthropic/claude-sonnet-5`) — no provider SDK needed. Storage is in-memory (not durable); add `@mastra/libsql` if you want threads to survive a restart.
