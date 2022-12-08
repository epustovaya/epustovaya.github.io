import { GroupBase, StylesConfig } from 'react-select';
import { SelectComponentsConfig } from 'react-select/dist/declarations/src/components';
import DropdownIndicator, { dropdownIndicatorStyles } from './DropdownIndicator';
import Option, { optionStyles } from './Option';
import { controlStyles } from './Control';
import ValueContainer, { valueContainerStyles } from './ValueContainer';
import { singleValueStyles } from './SingleValue';
import { placeholderStyles } from './Placeholder';
import { menuStyles } from './Menu';
import { menuListStyles } from './MenuList';
import { containerStyles } from './Container';
import { indicatorsContainerStyles } from './IndicatorsContainer';
import { menuPortalStyles } from './MenuPortal';
import { OptionType, SelectProps } from '../Select.types';
import { inputStyles } from './Input';
import Group, { groupStyles } from './Group/Group';
import GroupHeading, { groupHeadingStyles } from './GroupHeading/GroupHeading';

export function provideComponents<Multi extends boolean>(): SelectComponentsConfig<
  OptionType,
  Multi,
  GroupBase<OptionType>
  > {
  return {
    ValueContainer,
    DropdownIndicator,
    Option,
    IndicatorSeparator: null,
    ClearIndicator: null,
    Group,
    GroupHeading
  };
}

type ProvideStylesParams = {
  variant: SelectProps['variant'];
  zIndex: number;
  isExpanded: boolean;
  isGrouped: boolean;
};

export function provideStyles<Multi extends boolean>(o: ProvideStylesParams) {
  const { variant, zIndex, isExpanded, isGrouped } = o;

  const styles: StylesConfig<OptionType, Multi, GroupBase<OptionType>> = {
    container: containerStyles,
    control: controlStyles,
    valueContainer: valueContainerStyles(isExpanded),
    input: inputStyles,
    placeholder: placeholderStyles(isExpanded),
    singleValue: singleValueStyles,
    indicatorsContainer: indicatorsContainerStyles(isExpanded),
    dropdownIndicator: dropdownIndicatorStyles,
    menu: menuStyles(isExpanded),
    menuList: menuListStyles(isGrouped),
    option: optionStyles,
    menuPortal: menuPortalStyles({ variant, zIndex }),
    group: groupStyles,
    groupHeading: groupHeadingStyles
  };

  return styles;
}
