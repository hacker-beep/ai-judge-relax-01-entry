import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entry = [
  'On the kitchen floor, a wooden top spins on its point. It hums, low and even, and the painted red dot on its rim blurs past the crack between the boards.',
  'The hum drops. The dot comes round again, clear now, more slowly.',
  'The dot comes round once more, and the top wobbles, leans, and lies down on its side. The hum is gone.',
  'On the floorboards, the top keeps its painted dot facing the window.',
].join('\n\n');

mkdirSync(destination, { recursive: true });
writeFileSync(join(destination, 'entry.txt'), entry, 'utf8');
