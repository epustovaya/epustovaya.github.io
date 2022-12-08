import { format, isValid, parse, parseISO } from 'date-fns';

const DEFAULT_FORMAT_STRING = 'MM/dd/yyyy';
const DEFAULT_FORMAT_TIME = 'h:mm a';
const DEFAULT_FORMAT_TIME_TZ = `${DEFAULT_FORMAT_TIME} (z)`;

export function parseISODate(value: string) {
  const date = parseISO(value);

  return isValid(date) ? date : null;
}

export function parseDate(value: string, formatString = DEFAULT_FORMAT_STRING) {
  const date = parse(value, formatString, new Date());

  return isValid(date) ? date : null;
}

export function formatDate(date: Date | number, formatString = DEFAULT_FORMAT_STRING): string {
  return date ? format(date, formatString) : null;
}

export function formatTime(date: Date | number, withTZ = false) {
  if (date) {
    return withTZ ? formatDate(date, DEFAULT_FORMAT_TIME_TZ) : formatDate(date, DEFAULT_FORMAT_TIME);
  }

  return null;
}

export function formatISODate(date: string) {
  return formatDate(parseISODate(date));
}
