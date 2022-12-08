/* eslint-disable react/no-danger */
import React, { forwardRef, ReactNode, useMemo } from 'react';
import clsx from 'clsx';
import classes from './Checkbox.module.scss';
import { CheckboxProps } from './Checkbox.types';

function getLabel(label?: ReactNode, htmlLabel?: string) {
  return label || (htmlLabel ? <span dangerouslySetInnerHTML={{ __html: htmlLabel }} /> : null);
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    id,
    type = 'checkbox',
    switchButton = false,
    label: rawLabel,
    htmlLabel,
    hasError,
    className,
    classNameField,
    colorTheme = 'default',
    fieldPosition = 'left',
    hideLabel,
    ...inputProps
  } = props;
  let baseClassName;
  if (type === 'checkbox') {
    baseClassName = 'Checkbox';
    if (switchButton) {
      baseClassName = 'Switch';
    }
  } else {
    baseClassName = 'Radio';
  }

  const label = useMemo(() => getLabel(rawLabel, htmlLabel), [htmlLabel, rawLabel]);

  return (
    <label
      htmlFor={id}
      className={clsx(
        classes[baseClassName],
        hasError && classes[`${baseClassName}_error`],
        fieldPosition === 'right' && classes.fieldRight,
        classes[colorTheme],
        hideLabel && classes[`${baseClassName}_hideLabel`],
        className
      )}
    >
      <input {...inputProps} ref={ref} id={id} type={type} className={classes.Input} />
      <span className={clsx(classes[`${baseClassName}__Field`], classNameField)} />
      {label && <span className={classes[`${baseClassName}__Label`]}>{label}</span>}
    </label>
  );
});

if (process.env.NODE_ENV === 'development') {
  Checkbox.displayName = 'Checkbox';
}

export default Checkbox;
