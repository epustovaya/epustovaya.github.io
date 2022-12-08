import { ActionMeta, GroupBase, OptionProps, Options, OptionsOrGroups } from 'react-select';
import { OptionType, SelectInternalOptions, SelectProps } from './Select.types';
import { arrayIncludesArray } from '../../../utils/array';

export function isOptionAGroup(option: OptionType | GroupBase<OptionType>): option is GroupBase<OptionType> {
  return 'options' in option;
}

function makeFlatOptions(options: OptionsOrGroups<OptionType, GroupBase<OptionType>>) {
  return options.reduce<OptionType[]>(
    (acc, curr) => (isOptionAGroup(curr) ? [...acc, ...curr.options] : [...acc, curr]),
    []
  );
}

export function provideSelectValue(
  value: string | string[],
  options: OptionsOrGroups<OptionType, GroupBase<OptionType>>,
  optionsInternal: OptionsOrGroups<OptionType, GroupBase<OptionType>>,
  isMulti: boolean
) {
  if (!value) {
    return value;
  }

  if (!options || !optionsInternal) {
    return undefined;
  }

  const optionsFlat = makeFlatOptions(optionsInternal);

  if (isMulti) {
    const optionsFlatNotDisabled = makeFlatOptions(options).filter((o) => !o.isDisabled);
    const isAllSelected = value.length > 0 && optionsFlatNotDisabled.length === value.length;

    return optionsFlat?.filter((option) => {
      const { groupOptions } = option;

      // Show Check All option as selected, when all possible values are selected
      if (option.value === SelectInternalOptions.selectAll) {
        return isAllSelected;
      }

      // Show group as selected, when it has selected values
      if (groupOptions) {
        return arrayIncludesArray(
          value,
          groupOptions.filter((o) => !o.isDisabled).map((o) => o.value)
        );
      }

      return value.includes(option.value);
    });
  }

  return optionsFlat.find((o) => o.value === value);
}

export function buildInternalOptions(
  config: Pick<SelectProps, 'options' | 'isMulti' | 'withSelectAll' | 'selectAllLabel'>
) {
  const { options, isMulti, withSelectAll, selectAllLabel } = config;

  if (!options || !isMulti) {
    return options as OptionType[];
  }

  const selectAllOption: OptionType = {
    value: SelectInternalOptions.selectAll,
    label: selectAllLabel
  };

  return options.reduce<OptionType[]>(
    (acc, curr, index) => {
      if (isOptionAGroup(curr)) {
        const groupValue = `${SelectInternalOptions.groupPrefix}-${curr.label}`;

        const groupOption: OptionType = {
          label: curr.label,
          value: groupValue,
          groupOptions: curr.options,
          groupIndex: index
        };

        return [...acc, groupOption, ...curr.options.map<OptionType>((o) => ({ ...o, parentGroupValue: groupValue }))];
      }

      return [...acc, curr];
    },
    withSelectAll ? [selectAllOption] : []
  );
}

export function getIsGrouped(options: OptionsOrGroups<OptionType, GroupBase<OptionType>>) {
  if (!options) {
    return false;
  }

  return options.some((o) => isOptionAGroup(o));
}

export function isOptionChildOfGroup(optionProps: OptionProps<OptionType>) {
  const { options, label, isMulti, data } = optionProps;
  const { parentGroupValue } = data;

  if (isMulti) {
    return !!parentGroupValue;
  }

  const parentOption = options.find((o) => o.label === label);

  return !parentOption || (parentOption as GroupBase<OptionType>).options;
}

export function getOnChangeValue(
  newValue: OptionType | OptionType[] | null,
  actionMeta: ActionMeta<OptionType>,
  options: OptionsOrGroups<OptionType, GroupBase<OptionType>>
): string | string[] {
  const optionValue = 'value' in newValue ? newValue.value : null;

  if (Array.isArray(newValue)) {
    const { option, action } = actionMeta;
    const { groupOptions, value } = option;
    const newValueWithoutAllCustomShit = newValue.filter(
      (o) => o.value !== SelectInternalOptions.selectAll && !o.groupOptions
    );
    const newValueStringArr = newValueWithoutAllCustomShit.map((o) => o.value);

    // Select All option changed
    if (value === SelectInternalOptions.selectAll) {
      if (action === 'select-option') {
        return makeFlatOptions(options)
          .filter((o) => !o.isDisabled)
          .map((o) => o.value);
      }

      if (action === 'deselect-option') {
        return [];
      }
    }
    // Group option changed
    if (groupOptions) {
      if (action === 'select-option') {
        const groupValues = groupOptions.filter((o) => !o.isDisabled).map((o) => o.value);

        return [...newValueStringArr.filter((v) => !groupValues.includes(v) && v !== option.value), ...groupValues];
      }

      if (action === 'deselect-option') {
        const groupValues = groupOptions.map((o) => o.value);

        return newValueStringArr.filter((v) => !groupValues.includes(v));
      }
    } else {
      return newValueStringArr;
    }
  }

  return optionValue;
}

export function getOptionsLength(options: OptionsOrGroups<OptionType, GroupBase<OptionType>>) {
  return options.reduce((prev, curr) => {
    if (isOptionAGroup(curr)) {
      return prev + curr.options.length;
    }

    if (curr.groupOptions || curr.value === SelectInternalOptions.selectAll) {
      return prev;
    }

    return prev + 1;
  }, 0);
}

export function getSelectableOptionsFromValue(value: Options<OptionType>) {
  return value.filter((o) => !o.groupOptions && o.value !== SelectInternalOptions.selectAll);
}

export function getValueForMultiValueContainer(value: Options<OptionType>, options: OptionsOrGroups<OptionType, GroupBase<OptionType>>) {
  const selectedCount = getSelectableOptionsFromValue(value).length;
  const optionsLength = getOptionsLength(options);
  const labelMultiple = `${selectedCount} out of ${optionsLength} selected`;

  return selectedCount > 1 ? { value: labelMultiple, label: labelMultiple } : value[0];
}
