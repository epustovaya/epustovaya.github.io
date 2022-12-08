import { CSSObjectWithLabel } from 'react-select';

export function inputStyles(provided: CSSObjectWithLabel): CSSObjectWithLabel {
  return {
    ...provided,
    padding: 0,
    margin: 0
  };
}
