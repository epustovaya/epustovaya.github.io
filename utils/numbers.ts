export function getDifferenceWithNounForNegative(m: number, s: number) {
  const result = m - s;

  return result < 0 ? 0 : result;
}
