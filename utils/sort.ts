import size from 'lodash/size';
import orderBy from 'lodash/orderBy';
import { ListIteratee, Many } from 'lodash';

type List<T> = Array<T>;

type SortTypes = 'asc' | 'desc';

type SortArgs<T> = { list: List<T>; key: SortItem<T>['key']; isDesc: boolean };

export type SortItemCustomUtils<T> = {
  list: List<T>;
  isDesc: boolean;
  sort: (args: SortArgs<T>) => T[];
};

type SortItem<T> = {
  id: string;
  type: SortTypes;
  label: string;
  custom?: (utils: SortItemCustomUtils<T>) => any[];
  key?: Many<ListIteratee<T>>;
};

type SortOptionsByValue<T> = {
  [value: string]: Pick<SortItem<T>, 'id' | 'key' | 'custom'> & {
    item: SortItem<T>;
    isDesc: boolean;
    isAsc: boolean;
  };
};

export const SORT_TYPES: Record<string, SortTypes> = {
  asc: 'asc',
  desc: 'desc'
};

const createSortValue = <T extends unknown>(item: SortItem<T>) =>
  item.type === SORT_TYPES.asc ? `${item.id}_${SORT_TYPES.asc}` : `${item.id}_${SORT_TYPES.desc}`;

const sort = <T extends unknown>({ list, key, isDesc }: SortArgs<T>): T[] =>
  orderBy(list, key, [isDesc ? SORT_TYPES.desc : SORT_TYPES.asc]);

export const createSort = <T extends unknown>(items: SortItem<T>[], defaultSortOptionIndex = 0) => {
  const options = items.map((item) => ({
    label: item.label,
    value: createSortValue(item)
  }));

  /**
   * Reduced options for providing faster access to the current item
   * without having to calculate type and id every time
   */
  const sortOptionsByValue = items.reduce<SortOptionsByValue<T>>((acc, item) => {
    const { id, type, key, custom } = item;
    const value = createSortValue(item);
    acc[value] = { item, id, key, isDesc: type === SORT_TYPES.desc, isAsc: type !== SORT_TYPES.desc, custom };
    return acc;
  }, {});

  const utils = {
    getItemKey: (value: string) => sortOptionsByValue[value].key || null,
    isValueFromId: (value: string, id: string) => sortOptionsByValue[value].id === id,
    isAsc: (value: string) => sortOptionsByValue[value].isAsc,
    isDesc: (value: string) => sortOptionsByValue[value].isDesc,
    getCustom: (value: string) => sortOptionsByValue[value].custom
  };

  const sortList = (list: List<T>, sortValue: string) => {
    if (!size(list) || !Array.isArray(list)) {
      return [];
    }

    const isDesc = utils.isDesc(sortValue);
    const itemKey = utils.getItemKey(sortValue);
    const custom = utils.getCustom(sortValue);

    if (custom) {
      return custom({ list, isDesc, sort });
    }

    if (itemKey) {
      return sort<T>({ list, key: itemKey, isDesc });
    }

    return list;
  };

  return {
    options,
    sortList,
    defaultValue: options[defaultSortOptionIndex].value,
    ...utils
  };
};
