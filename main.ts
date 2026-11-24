// news-image-20261124: "24 November 2026 in One Image" (Node 22, standard library only).
// The entry image is entry.png beside this file: a newspaper front page for
// Tuesday 24 November 2026 — feature "HUANG IS BACK" (Nvidia reinstates Jensen
// Huang, shares +31%), plus Trump warns Iran, the Serang candy-factory toll,
// COP31 collapses, Zelensky urges talks now, and a trade footer.
// The program copies it to /output/entry.png, deterministically, with no network.
// Run twice, it writes identical bytes every time: the image is copied, never regenerated.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
