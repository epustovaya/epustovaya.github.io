import React, { ElementType } from 'react';
import { Breakpoints } from '../../types/Breakpoints';

export type SpaceValue =
  | 'auto'
  | 0
  | 2
  | 4
  | 6
  | 8
  | 12
  | 16
  | 20
  | 24
  | 28
  | 30
  | 32
  | 36
  | 40
  | 44
  | 48
  | 50
  | 52
  | 56
  | 60
  | 64
  | 80
  | 120
  | 180;

export type SpacePropertyConfig = SpaceValue | Partial<Record<Breakpoints, SpaceValue>>;

export type SpaceConfig = {
  top?: SpacePropertyConfig;
  right?: SpacePropertyConfig;
  bottom?: SpacePropertyConfig;
  left?: SpacePropertyConfig;
};

export type SpaceConfigOptions = {
  asMargin?: boolean;
  negative?: boolean;
};

export type SpaceProps = SpaceConfig & SpaceConfigOptions & {
  className?: string;
  component?: ElementType;
  children?: React.ReactNode;
  htmlId?: string;
  testId?: string;
};
