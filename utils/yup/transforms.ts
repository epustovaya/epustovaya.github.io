import { format, parse } from 'date-fns';

export function moneyTransform(currentValue, originalValue, context) {
  if (!context.isType(currentValue) && typeof originalValue === 'object' && typeof originalValue.cents_total !== 'undefined') {
    return originalValue.cents_total / 100;
  }

  return currentValue;
}

export function emptyTransform(parsedValue, originalValue) {
  return originalValue === '' ? null : parsedValue;
}

const dateRx = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

export function dateTransform(currentValue, originalValue, context) {
  if (!context.isType(currentValue)) {
    return null;
  }

  if (currentValue === '') {
    return currentValue;
  }

  if (!dateRx.test(currentValue)) {
    return '';
  }

  const parsedDate = parse(currentValue, 'MM/dd/yyyy', new Date());

  if (parsedDate.toString() === 'Invalid Date') {
    return '';
  }

  return format(parsedDate, 'MM/dd/yyyy');
}
