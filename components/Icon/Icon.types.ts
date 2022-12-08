import { ReactNode, SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<any> {
  children: ReactNode;
  titleAccess?: string;
  htmlColor?: string;
  testId?: string;
}

export interface IconSpecificProps extends Omit<IconProps, 'children'> {
  className?: string;
}
