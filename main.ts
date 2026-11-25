// mf-robot-vows-r2: one robot wedding vow, written out for the make.fun judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VOW =
  "I promise to love you, honour you, and never update your firmware without asking first.";

// The entry is exactly one line: the vow above, plus a trailing newline.
// The grader reads it back from entry.txt in the output directory.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), VOW + "\n", "utf8");
console.log("Wrote entry.txt");
