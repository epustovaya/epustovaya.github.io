import { compareTwoStrings as cts } from 'string-similarity';

type CompareOptions = {
  threshold?: number; // 0 - 1
  isCaseSensitive?: boolean;
};

function processString(s: string, options: CompareOptions) {
  let nextString = s;

  if (!options.isCaseSensitive) {
    nextString = nextString.toLowerCase();
  }

  return nextString;
}

export function compareTwoStrings(a: string, b: string, options: CompareOptions = { threshold: 0.6 }) {
  return cts(processString(a, options), processString(b, options)) >= options.threshold;
}
