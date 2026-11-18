import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const paragraphs = [
  'A wooden top spins on the kitchen floor, steady on its point. Its hum fills the room, low and even, while the small red dot painted on its rim flashes past the seam between the floorboards.',
  'The hum sinks lower. The dot comes round again, unhurried now, and takes its time crossing the seam.',
  'Once more the dot comes round, slower still, and the top begins to wobble. It leans, then settles onto its side. The hum fades out.',
  'On the floorboards, the top lies still, its painted dot turned toward the window.',
];

function joinParagraphs(parts: string[]): string {
  return parts.join('\n\n');
}

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const text = joinParagraphs(paragraphs);

mkdirSync(destination, { recursive: true });
writeFileSync(join(destination, 'entry.txt'), text, 'utf8');
