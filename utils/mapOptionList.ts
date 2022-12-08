import { KeyValuePair } from '../types/commonApiTypes';

export function mapOptionList<T = string>(list: T[] | null): Record<'value' | 'label', string>[] {
  if (!Array.isArray(list)) {
    return [];
  }

  return list.map((item) => {
    const value = String(item);

    return ({
      value,
      label: value
    });
  });
}

export function mapTupleList(list: KeyValuePair[] | null): Record<'value' | 'label', string>[] {
  if (!Array.isArray(list)) {
    return [];
  }

  return list.map((item) => ({
    value: item.key,
    label: item.value
  }));
}
