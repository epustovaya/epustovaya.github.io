import React from 'react';
import clsx from 'clsx';
import { OptionProps } from 'react-select';
import classes from './OptionContainer.module.scss';
import { OptionType } from '../../Select.types';
import { isOptionChildOfGroup } from '../../utils';

const OptionContainer = (props: OptionProps<OptionType>) => {
  const { children, isSelected, isFocused, isDisabled, isMulti, innerProps, data, selectProps } = props;
  const { icon, iconClassName, isDivider, isIconOnRight = false } = data;
  const { customVariant, customClassNameOptionIcon } = selectProps;
  const isIconLink = typeof icon === 'string';
  const isGroupChild = isOptionChildOfGroup(props);

  if (isDivider) {
    return <div className={classes.Divider} aria-hidden="true" tabIndex={-1}/>;
  }

  const Icon = isIconLink ? 'img' : icon;

  return (
    <div
      className={clsx(
        classes.OptionContainer,
        isDisabled && classes.OptionContainer_disabled,
        isFocused && classes.OptionContainer_focused,
        isSelected && !isMulti && classes.OptionContainer_selected,
        isIconOnRight && Icon && classes.OptionContainer_iconRight,
        isGroupChild && classes.OptionContainer_groupChild
      )}
      {...innerProps}
    >
      {Icon && (
        <Icon
          className={clsx(
            classes.OptionContainer__Icon,
            customVariant === 'textInputPhone' && classes.OptionContainer__Icon_flag,
            iconClassName,
            customClassNameOptionIcon
          )}
          {...(isIconLink ? { ...{ src: icon } } : {})}
        />
      )}
      {children}
    </div>
  );
};

export default OptionContainer;
