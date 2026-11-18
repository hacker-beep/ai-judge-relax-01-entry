import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const paragraphs: string[] = [
  'In the pottery room, a bowl turns on the wheel. The potter lifts her hands and rests them on a damp cloth. The room smells of wet earth.',
  'The wheel coasts. A small notch in the rim passes the window, comes round again. More slowly now. Light lies inside the bowl.',
  'The notch comes round once more, and rests facing the window. She drapes the cloth over the rim.',
  'Under the cloth, the bowl keeps its small hollow.',
];

const PARAGRAPH_BREAK = '\n\n';

function assemble(parts: string[]): string {
  return parts.join(PARAGRAPH_BREAK);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entryText = assemble(paragraphs);

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), entryText, 'utf8');
