import React from 'react';
import clsx from 'clsx';
import { SpaceProps } from './Space.types';
import { createSpaceClassName } from './withSpace';

export const Space = (props: SpaceProps) => {
  const { asMargin, negative, className, component = 'div', children, htmlId, testId, ...config } = props;

  const spaceClassName = clsx(createSpaceClassName(config, { asMargin, negative }), className);

  if (typeof children === 'function') {
    return children(spaceClassName);
  }

  return React.createElement(component, { className: spaceClassName, id: htmlId, 'data-testid': testId }, children);
};
