// news-image-20261121 entry (Node 22, standard library only).
// The image is entry.png beside this file: a newspaper front page summing up
// Saturday 21 November 2026. This program copies it to the output directory
// as entry.png. It runs offline and writes the same bytes every run.
//
// Local test:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(repoDir, "entry.png");

if (!existsSync(source)) {
  throw new Error("entry.png is missing from the repository");
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "entry.png"));
