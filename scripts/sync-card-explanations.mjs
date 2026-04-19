import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const sourceTextPath = path.join(repoRoot, "endorse-condensed-card-text");
const dataPath = path.join(repoRoot, "js", "endorsements-data.js");

function toAsciiJson(value) {
  return JSON.stringify(value, null, 2).replace(/[^\x00-\x7F]/g, (char) => {
    const code = char.charCodeAt(0).toString(16).padStart(4, "0");
    return "\\u" + code;
  });
}

function loadData() {
  const code = fs.readFileSync(dataPath, "utf8");
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(code, context);

  return {
    appMeta: context.window.APP_META || {},
    endorsements: Array.isArray(context.window.ENDORSEMENTS)
      ? context.window.ENDORSEMENTS.slice()
      : [],
  };
}

function parseCardExplanationSource(text) {
  const body = text.trim();
  const pattern = /^(A\.\d+)\s-\s(.+)\n([\s\S]*?)(?=\n{2}A\.\d+\s-\s|\s*$)/gm;
  const entries = [];
  const seenIds = new Set();
  let match;

  while ((match = pattern.exec(body)) !== null) {
    const id = match[1];
    const title = match[2].trim();
    const cardExplanation = match[3]
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .join(" ");

    if (seenIds.has(id)) {
      throw new Error("Duplicate source entry for " + id + ".");
    }

    seenIds.add(id);
    entries.push({ id, title, cardExplanation });
  }

  if (!entries.length) {
    throw new Error("No endorsement entries were parsed from the source text file.");
  }

  const unmatched = body.replace(
    /^(A\.\d+)\s-\s(.+)\n([\s\S]*?)(?=\n{2}A\.\d+\s-\s|\s*$)/gm,
    "",
  ).trim();

  if (unmatched) {
    throw new Error("Source text contains content that did not match the expected block format.");
  }

  return entries;
}

function buildOutput(appMeta, endorsements) {
  const appMetaJson = toAsciiJson(appMeta).replace(/\n/g, "\n  ");
  const endorsementsJson = toAsciiJson(endorsements).replace(/\n/g, "\n  ");

  return [
    "(() => {",
    '  "use strict";',
    "",
    "  window.APP_META = " + appMetaJson + ";",
    "",
    "  window.ENDORSEMENTS = " + endorsementsJson + ";",
    "})();",
    "",
  ].join("\n");
}

const sourceText = fs.readFileSync(sourceTextPath, "utf8");
const sourceEntries = parseCardExplanationSource(sourceText);
const sourceMap = new Map(sourceEntries.map((entry) => [entry.id, entry]));
const { appMeta, endorsements } = loadData();
const knownIds = new Set(endorsements.map((item) => item.id));
const warnings = [];

const updatedEndorsements = endorsements
  .slice()
  .sort((left, right) => left.order - right.order)
  .map((item) => {
    const nextItem = { ...item };
    delete nextItem.cardExplanation;

    const sourceEntry = sourceMap.get(item.id);
    if (!sourceEntry) {
      warnings.push("Missing card explanation for " + item.id + "; leaving fallback behavior in place.");
      return nextItem;
    }

    if (sourceEntry.title !== item.title) {
      warnings.push(
        "Title mismatch for " +
          item.id +
          ': source has "' +
          sourceEntry.title +
          '" but data has "' +
          item.title +
          '". Leaving fallback behavior in place.',
      );
      return nextItem;
    }

    nextItem.cardExplanation = sourceEntry.cardExplanation;
    return nextItem;
  });

sourceEntries.forEach((entry) => {
  if (!knownIds.has(entry.id)) {
    warnings.push("Source text contains unknown endorsement id " + entry.id + ".");
  }
});

fs.writeFileSync(dataPath, buildOutput(appMeta, updatedEndorsements), "utf8");

console.log(
  "Synced card explanations for " +
    updatedEndorsements.filter((item) => typeof item.cardExplanation === "string").length +
    " endorsements.",
);

if (warnings.length) {
  warnings.forEach((warning) => console.warn("Warning:", warning));
}
