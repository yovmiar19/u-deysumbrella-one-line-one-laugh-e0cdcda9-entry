import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Laugh — a single joke line, written out exactly as-is.
// The punchline lands because the situation itself is the reaction.
const line =
  "I told my wife she was drawing her eyebrows too high. She looked surprised.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
