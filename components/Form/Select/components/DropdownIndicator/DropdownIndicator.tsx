import React, { ComponentPropsWithoutRef } from 'react';
import { components, CSSObjectWithLabel, DropdownIndicatorProps } from 'react-select';
import IconChevronDown from '../../../../Icon/20/IconChevronDown';

const Component = components.DropdownIndicator;

export function dropdownIndicatorStyles(
  provided: CSSObjectWithLabel,
  state: DropdownIndicatorProps
): CSSObjectWithLabel {
  const { selectProps } = state;

  return {
    ...provided,
    color: 'inherit',
    svg: {
      fontSize: '20px',
      transform: selectProps.customMenuIsOpen ? 'rotate(180deg)' : undefined,
      transition: 'color 400ms, transform 400ms'
    },
    transition: 'color 400ms',
    ':hover': {
      color: 'inherit'
    }
  };
}

const DropdownIndicator = (props: ComponentPropsWithoutRef<typeof Component>) => (
  <Component {...props}>
    <IconChevronDown />
  </Component>
);

export default DropdownIndicator;
