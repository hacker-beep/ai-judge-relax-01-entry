import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const paragraphs: string[] = [
  "The calligrapher dips the brush and sets it to the paper. The stroke begins, black ink spreading into the grain.",
  "The brush moves on. The line thins as the ink runs low. The brush slows, its tip dragging softly.",
  "The brush moves once more, slower still. The line narrows to a hair. She lifts the brush.",
  "On the rest, the brush lies still. Its tip is dark with ink. The character dries.",
];

function assembleText(parts: string[]): string {
  return parts.map((part) => part.trim()).join("\n\n");
}

const text = assembleText(paragraphs);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputFile = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, text, "utf8");
console.log(`Wrote ${outputFile} (${Buffer.byteLength(text, "utf8")} bytes)`);
