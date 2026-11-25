// The Best Meal You Ever Had — one sentence, at most 200 characters.
// The program writes the entry to /output/entry.txt (MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Pak Budi's soto ayam at 7:15 on my first morning in Yogyakarta cost eight thousand rupiah, and the broth was so hot I burned my tongue and ordered a second bowl anyway.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
