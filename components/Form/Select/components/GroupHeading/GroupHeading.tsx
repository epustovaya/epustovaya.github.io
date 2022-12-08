import React from 'react';
import { components, CSSObjectWithLabel, GroupHeadingProps } from 'react-select';
import { OptionType } from '../../Select.types';

export function groupHeadingStyles(provided: CSSObjectWithLabel): CSSObjectWithLabel {
  return {
    ...provided,
    fontSize: '16px',
    lineHeight: '24px',
    margin: '0',
    textTransform: 'none',
    color: 'inherit',
    fontWeight: '700',
    padding: '9px 15px'
  };
}

const Component = components.GroupHeading;

const GroupHeading = (props: GroupHeadingProps<OptionType>) => (
  <Component {...props} />
);

export default GroupHeading;
