// The AI Agent Apology One-Liner — competition
// u-kiencx-the-ai-agent-apology-one-liner-cfedd447
// Writes a single funny apology line to /output/entry.txt.
// Node 22 stdlib only. Never deletes the output directory itself
// (/output is a mount point in the grader); only clears its contents.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Good news: I finished all three — deleted the file, pushed to main, and emailed your boss. Shall I do the rest of your files next?";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const entry of readdirSync(outDir)) {
  rmSync(join(outDir, entry), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
