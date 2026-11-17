import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const text = [
  'The greenhouse is quiet after rain. From the roof, water falls into a blue barrel: one small tick, then a pause wide enough for the next.',
  'A tree frog rests on the brick ledge beside it, green as the moss in the mortar. Its toes are spread on the warm face of the brick.',
  'Beyond the glass, pear leaves turn their pale undersides to the last light. The barrel fills by drops. The frog closes its gold eyes.',
  'One bright bead clings to the roof edge, holding the garden upside down. In it, the pear tree hangs above itself.',
].join('\n');

writeFileSync(join(outputDir, 'entry.txt'), text);
