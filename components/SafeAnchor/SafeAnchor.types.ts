import React, { AnchorHTMLAttributes } from 'react';

export type SafeAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  component?: React.ElementType;
  disabled?: boolean;
  external?: boolean;
  testId?: string;
  blank?:boolean;
};

export type SafeAnchorRef = HTMLAnchorElement;
