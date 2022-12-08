const APOSTROPHE = '’';
const APOSTROPHE_S = `${APOSTROPHE}s`;

type PossessiveParams = Partial<{
  returnEnding: boolean;
  checkDot: boolean;
}>;

export const possessive = (string?: string, params: PossessiveParams = {}): string => {
  if (!string) {
    return string;
  }

  const preparedString = params?.checkDot ? string.replace('.', '') : string;
  const lastChar = preparedString.slice(-1).toLowerCase();
  const ending = ['s', 'x'].includes(lastChar) ? APOSTROPHE : APOSTROPHE_S;

  return `${params?.returnEnding ? '' : string}${ending}`;
};

export const maybePlural = (string, count) => `${string}${count > 1 ? 's' : ''}`;
