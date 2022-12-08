import clsx from 'clsx';
import React from 'react';
import { CheckboxGroupProps } from './Checkbox.types';
import { Space } from '../../Space/Space';
import classes from './CheckboxGroup.module.scss';

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const {
    children,
    spaceVertical = 8,
    spaceInline = 24,
    layout = 'vertical',
    flexWrap = 'wrap',
    as: Component = 'div',
    className
  } = props;
  const childrenLength = React.Children.toArray(children).length;

  return (
    <Component
      className={clsx(
        className,
        classes.CheckboxGroup,
        classes[`CheckboxGroup_${layout}`],
        flexWrap === 'nowrap' ? classes[`CheckboxGroup_${layout}--${flexWrap}`] : null
      )}
    >
      {React.Children.map(children, (child, index) => (
        <Space
          right={layout === 'inline' && index < childrenLength - 1 ? spaceInline : 0}
          top={spaceVertical}
          bottom={spaceVertical}
        >
          {child}
        </Space>
      ))}
    </Component>
  );
};

export default CheckboxGroup;
