import { CSSObjectWithLabel } from 'react-select';
import styleVariables from 'styles/export.module.scss';

export function singleValueStyles(provided: CSSObjectWithLabel): CSSObjectWithLabel {
  return {
    ...provided,
    marginLeft: 0,
    marginRight: 0,
    color: styleVariables.cText,
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  };
}
