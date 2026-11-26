// The Self-Checkout Is Judging You — make.fun entry
// Writes one funny line in the voice of a smug self-checkout machine
// to $MAKEFUN_OUTPUT_DIR/entry.txt. Node 22, stdlib only, deterministic.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "2:47 AM. Twelve yoghurts, one spoon, no bag — and you keep glancing at the CCTV like I can't see you. Sir, I'm just a till, but even I know a cry for help when I scan one.";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
