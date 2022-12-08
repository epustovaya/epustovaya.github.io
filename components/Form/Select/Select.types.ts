import { ActionMeta, GroupBase as GroupBaseInitial, Props } from 'react-select';
import { ElementType, ReactNode } from 'react';
import { WithErrorMessageProps } from '../Form.types';

interface GroupBase<O = OptionType> extends GroupBaseInitial<O> {}

interface CustomSelectProps {
  customMenuIsOpen?: boolean;
  customVariant?: 'textInputPhone' | 'search' | 'searchable';
  customWithLabel?: boolean;
  customCheckboxPosition?: 'left' | 'right';
  customClassNameOptionIcon?: string;
}

declare module 'react-select/dist/declarations/src/Select' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface Props<Option, IsMulti extends boolean, Group extends GroupBaseInitial<Option>> extends CustomSelectProps {}
}

export type OptionType = {
  value: string;
  label: string;
  isSelected?: boolean;
  isDivider?: boolean;
  icon?: ElementType | string;
  iconClassName?: string;
  isIconOnRight?: boolean;
  isDisabled?: boolean;
  groupOptions?: readonly OptionType[];
  parentGroupValue?: string;
  groupIndex?: number;
};

export type SelectBaseProps = SelectProps & {
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
};

export type SelectProps = Omit<Props<OptionType, boolean, GroupBase>, 'value' | 'defaultValue' | 'onChange' | 'placeholder' | keyof CustomSelectProps> & {
  placeholder?: string;
  value?: string | string[];
  defaultValue?: string | string[];
  label?: string;
  disabled?: boolean;
  variant?: Props['customVariant'];
  hasError?: boolean;
  onChange?: (
    v: string | string[],
    option: OptionType | readonly OptionType[] | null,
    actionMeta: ActionMeta<OptionType>
  ) => void;
  errors?: WithErrorMessageProps['errors'];
  helperMessage?: ReactNode;
  checkboxPosition?: Props['customCheckboxPosition'];
  zIndex?: number;
  isExpanded?: boolean;
  withSelectAll?: boolean;
  selectAllLabel?: string;
  classNameOptionIcon?: string;
};

export enum SelectInternalOptions {
  selectAll= '_all',
  groupPrefix = '_group'
}
