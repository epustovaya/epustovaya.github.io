import React from 'react';
import { components, CSSObjectWithLabel, OptionProps } from 'react-select';
import clsx from 'clsx';
import OptionContainer from '../OptionContainer';
import Checkbox from '../../../Checkbox';
import { OptionType, SelectInternalOptions } from '../../Select.types';
import classes from './Option.module.scss';
import GroupDivider from '../GroupDivider/GroupDivider';

const Component = components.Option;

export function optionStyles(provided: CSSObjectWithLabel): CSSObjectWithLabel {
  return {
    ...provided,
    fontSize: 'inherit',
    lineHeight: 'inherit',
    color: 'inherit',
    flex: '1 1 auto',
    backgroundColor: 'transparent',
    cursor: 'inherit',
    padding: 0,
    minHeight: 24,
    ':active': null
  };
}

const Option = (props: OptionProps<OptionType>) => {
  const { selectProps, isMulti, innerRef, isDisabled, label, isSelected, isFocused, className, data } = props;
  const { groupOptions, groupIndex, value } = data;
  const isSelectAll = value === SelectInternalOptions.selectAll;
  const hasGroupDivider = groupOptions && groupIndex > 0;

  if (isMulti) {
    return (
      <>
        {hasGroupDivider && <GroupDivider/>}
        <OptionContainer {...props} className={clsx(className, classes.OptionContainer)}>
          <div ref={innerRef} className={classes.CheckboxControl}>
            <Checkbox
              className={groupOptions || isSelectAll ? classes.CheckboxGroup : classes.Checkbox}
              classNameField={clsx(
                classes.Checkbox__Field,
                isFocused && classes.Checkbox__Field_focused,
                isSelected && classes.Checkbox__Field_checked
              )}
              disabled={isDisabled}
              label={label}
              checked={isSelected}
              onChange={() => undefined}
              fieldPosition={selectProps.customCheckboxPosition}
            />
          </div>
        </OptionContainer>
        {isSelectAll && <GroupDivider/>}
      </>
    );
  }

  return (
    <OptionContainer {...props}>
      <Component {...props} />
    </OptionContainer>
  );
};

export default Option;
