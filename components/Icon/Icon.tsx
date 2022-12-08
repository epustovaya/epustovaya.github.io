import React from 'react';
import clsx from 'clsx';
import { IconProps } from './Icon.types';
import classes from './Icon.module.scss';

const Icon = ({
  titleAccess,
  htmlColor,
  children,
  className,
  testId,
  ...props
}: IconProps) => (
  <svg
    {...props}
    className={clsx(className, classes.Icon)}
    focusable={false}
    aria-hidden={titleAccess ? undefined : 'true'}
    role={titleAccess ? 'img' : undefined}
    color={htmlColor}
    xmlns="http://www.w3.org/2000/svg"
    data-testid={testId || 'Icon'}
  >
    {titleAccess ? <title>{titleAccess}</title> : null}
    {children}
  </svg>
);

export default Icon;
