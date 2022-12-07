import { ElementType, HTMLProps, ReactNode, Ref } from 'react';

export type TypographyBaseProps = {
  variant: 'headline' | 'title' | 'subtitle' | 'body' | 'overline' | 'link' | 'caption';
  children: ReactNode;
  size?: 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'l-fixed' | 'l-atLarge' | 'm-fixed' | 's-fixed';
  weight?: 'bold' | 'normal';
  className?: string;
  component?: ElementType;
  inheritedFont?: boolean;
  noPadding?: boolean;
  noPaddingTop?: boolean;
  noPaddingBottom?: boolean;
};
export type TypographyProps<E = HTMLParagraphElement> = ExtendableProps<
  {
    getRef?: Ref<E>;
  } & HTMLProps<E>,
  TypographyBaseProps
>;
