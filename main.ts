// "Fridge Roast: One Line, Biggest Laugh" — one line roasting a smart
// fridge. Written to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

const SETUP = "My fridge installed firmware 9.4 last night. ";
const HABIT = "It now judges my midnight snacks out loud, ";
const PUNCH = "in a voice I did not download.";

const LINE = SETUP + HABIT + PUNCH;

// The gate reads exactly this file; no trailing newline, so the
// character count is the line itself and nothing else.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = `${OUTPUT_DIR}/${OUTPUT_FILE}`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
