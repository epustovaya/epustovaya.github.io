export const arrayIncludesArray = (a, b): boolean => {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return false;
  }

  return b.every((item) => a.includes(item));
};

export function splitArrayInTwoParts<T>(arr: Array<T>): [Array<T>, Array<T>] {
  const half = Math.ceil(arr.length / 2);
  return [arr.slice(0, half), arr.slice(half)];
}
