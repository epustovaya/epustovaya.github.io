import { CSSObjectWithLabel } from 'react-select';

export const menuListStyles = (isGrouped = false) => (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
  ...provided,
  padding: isGrouped ? '12px 0' : '4px 0',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
});
