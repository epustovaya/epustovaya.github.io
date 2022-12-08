import { ButtonProps } from './Button.types';
import { ButtonApiOptions } from '../../types/commonApiTypes';

type GetPropsByApiTypeReturn = Pick<ButtonProps, 'variant' | 'colorVariant' | 'size'>;

export function getPropsByApiType(type: ButtonApiOptions['type']): GetPropsByApiTypeReturn {
  const base: GetPropsByApiTypeReturn = {
    variant: 'primary',
    colorVariant: 'primary',
    size: 'l'
  };

  switch (type) {
    case 'secondary': {
      return {
        ...base,
        colorVariant: 'outline'
      };
    }
    case 'accent': {
      return {
        ...base,
        colorVariant: 'accent'
      };
    }
    case 'link': {
      return {
        ...base,
        variant: 'secondary'
      };
    }
    case 'primary':
    default: {
      return base;
    }
  }
}
