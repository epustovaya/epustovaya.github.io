import { getKeys } from './getKeys';
import { Breakpoints } from '../types/Breakpoints';

type SpecValue = string | number | boolean;

type SpecValueResponsive = SpecValue | Record<string, any>;

type SpecResponsiveConfig = Partial<Record<Breakpoints, SpecValueResponsive>>;

type SpecConfig = SpecValue | SpecResponsiveConfig;

type Options = {
  delimiter?: string;
  breakpointFallback?: Breakpoints | '';
  specValueMapper?: (value: SpecValueResponsive) => string;
};

export function createClassNameSelectors(
  prefix: string,
  spec: SpecConfig,
  specFallback: SpecValue,
  {
    delimiter = '-',
    breakpointFallback = 'xxs',
    specValueMapper = (v) => (typeof v !== 'object' ? `${v}` : '')
  }: Options = {}
): string[] {
  if (typeof spec !== 'object') {
    const booleanValue = typeof spec === 'boolean';
    const value = booleanValue ? '' : `${delimiter}${spec}`;

    if (booleanValue && spec === false) {
      return [''];
    }

    return [`${prefix}${delimiter}${breakpointFallback}${value}`];
  }

  const breakpoints = getKeys(spec);

  if (breakpointFallback && breakpoints.indexOf(breakpointFallback) === -1) {
    breakpoints.unshift(breakpointFallback);
  }

  return breakpoints.map((name) => {
    const specValue = typeof spec[name] !== 'undefined' ? spec[name] : specFallback;
    const isBooleanValue = typeof specValue === 'boolean';
    const value = isBooleanValue ? '' : `${delimiter}${specValueMapper(specValue)}`;

    if (isBooleanValue && specValue === false) {
      return '';
    }

    return `${prefix}${delimiter}${name}${value}`;
  });
}

export function getStylesFromSelectors(selectors: string[], styles: { [key: string]: string }): string[] {
  return selectors.map((selector) => styles[selector]);
}
