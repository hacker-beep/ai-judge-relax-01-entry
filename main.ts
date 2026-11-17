import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entry = [
  'In the pottery room, a bowl turns on the wheel. The potter lifts her hands and rests them on a damp cloth. The room smells of wet earth.',
  'The wheel coasts. A small notch in the rim passes the window, comes round again. More slowly now. Light lies inside the bowl.',
  'The notch comes round once more, and rests facing the window. She drapes the cloth over the rim.',
  'Under the cloth, the bowl keeps its small hollow.',
].join('\n\n');

mkdirSync(destination, { recursive: true });
writeFileSync(join(destination, 'entry.txt'), entry, 'utf8');
