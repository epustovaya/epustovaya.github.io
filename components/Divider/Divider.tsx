import React from 'react';
import clsx from 'clsx';
import { DividerProps } from './Divider.types';
import classes from './Divider.module.scss';

const Divider = (props: DividerProps ) => {
  const { className, direction = 'horizontal', dashed = false } = props;

  return (
    <div
      className={clsx(
        className,
        classes.default,
        direction === 'vertical' && classes.vertical,
        dashed && classes.dashed
      )}
      aria-hidden="true"
    />
  );
};

export default Divider;
