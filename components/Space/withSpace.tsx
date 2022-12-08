import clsx from 'clsx';
import React from 'react';
import { SpaceConfig, SpaceConfigOptions } from './Space.types';
import styles from './Space.module.scss';
import { createClassNameSelectors } from '../../utils/classNameSelectors';

function getStyles(selectors: string[]): string[] {
  return selectors.map((selector) => styles[selector]);
}

function getPrefix(position: keyof SpaceConfig, options: SpaceConfigOptions = {}) {
  const { asMargin, negative } = options;
  const prefixPositionMap = {
    top: 't',
    right: 'r',
    bottom: 'b',
    left: 'l'
  };

  return `${asMargin ? 'm' : ''}${prefixPositionMap[position]}${negative ? '-n' : ''}`;
}

export function createSpaceClassName(config: SpaceConfig, options?: SpaceConfigOptions): string {
  const { top, right, bottom, left } = config;

  return clsx(
    top ? getStyles(createClassNameSelectors(getPrefix('top', options), top, '0')) : null,
    right ? getStyles(createClassNameSelectors(getPrefix('right', options), right, '0')) : null,
    bottom ? getStyles(createClassNameSelectors(getPrefix('bottom', options), bottom, '0')) : null,
    left ? getStyles(createClassNameSelectors(getPrefix('left', options), left, '0')) : null
  );
}

export function withSpace(Component: React.ComponentType | string) {
  return (config: SpaceConfig, options?: SpaceConfigOptions) => {
    const spaceClassName = createSpaceClassName(config, options);

    const WithSpace = (props: any) => {
      const { className, ...restProps } = props;

      return <Component {...restProps} className={clsx(className, spaceClassName)} />;
    };

    WithSpace.displayName = 'WithSpace';

    return WithSpace;
  };
}
