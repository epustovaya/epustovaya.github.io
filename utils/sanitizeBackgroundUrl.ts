import replace from 'lodash/replace';

export function sanitizeBackgroundUrl(value: string): string {
  return replace(value, /"/g, '%22');
}
