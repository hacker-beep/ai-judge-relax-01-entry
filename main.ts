import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// This revised version follows one quiet greenhouse scene and its small tree frog.
// Measured details give the rain a slower rhythm.
// The inverted tree at the end is meant to stay with the reader.
const text = [
  'After rain, the greenhouse roof ticks into a blue barrel. One drop, then a long pause before the next.',
  "A tree frog rests on the brick ledge, toes spread in the mortar's green moss. The brick still holds the day's warmth.",
  'Behind the glass, pear leaves turn their silver undersides to the last light. The barrel darkens by drops; one leaf wavers in its blue reflection. The frog shuts its gold eyes.',
  'At the roof edge, one drop holds the pear tree upside down; a little dark tree trembles in the sky.',
].join('\n');

writeFileSync(join(outputDir, 'entry.txt'), text);
