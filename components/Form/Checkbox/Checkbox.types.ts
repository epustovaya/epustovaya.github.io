import { ComponentPropsWithRef, ElementType, ReactNode } from 'react';
import { SpacePropertyConfig } from '../../Space/Space.types';

export type CheckboxGroupSpacePropType = 'l' | 'sl';

export type CheckboxGroupProps = {
  children: ReactNode;
  layout?: 'inline' | 'vertical';
  flexWrap?: 'wrap' | 'nowrap';
  spaceVertical?: SpacePropertyConfig;
  spaceInline?: SpacePropertyConfig;
  as?: ElementType;
  className?: string;
};

export type CheckboxProps = {
  type?: 'checkbox' | 'radio';
  switchButton?: boolean;
  label?: ReactNode;
  htmlLabel?: string;
  hasError?: boolean;
  fieldPosition?: 'left' | 'right';
  classNameField?: string;
  colorTheme?: 'default' | 'white';
  hideLabel?: boolean;
} & Omit<ComponentPropsWithRef<'input'>, 'type'>;
