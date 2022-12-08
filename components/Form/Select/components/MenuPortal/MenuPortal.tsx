import { CSSObjectWithLabel } from 'react-select';
import { PortalStyleArgs } from 'react-select/dist/declarations/src/components/Menu';
import { SelectProps } from '../../Select.types';

type MenuPortalStylesParams = {
  variant?: SelectProps['variant'];
  zIndex?: number;
};

export const menuPortalStyles =
  ({ variant, zIndex }: MenuPortalStylesParams) =>
    (provided: CSSObjectWithLabel, state: PortalStyleArgs): CSSObjectWithLabel => {
      const { left, width } = state.rect;
      const next = { ...provided, zIndex: zIndex || provided.zIndex };

      if (variant !== 'textInputPhone') {
        next.left = `${left - 12}px`;
        next.width = `${width + 57}px`;
      }

      if (variant === 'search') {
        next.minWidth = '288px';
      }

      return next;
    };
