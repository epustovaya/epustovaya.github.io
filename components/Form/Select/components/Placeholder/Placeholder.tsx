import { CSSObjectWithLabel } from 'react-select';
import styleVariables from 'styles/export.module.scss';

export const placeholderStyles = (isExpanded: boolean) => (provided: CSSObjectWithLabel): CSSObjectWithLabel => {
  const color = isExpanded ? styleVariables.cPlaceholderLight : styleVariables.cPlaceholder;

  const placeholderExpandedStyles = {
    fontSize: '16px',
    fontWeight: 400
  };

  return {
    ...provided,
    color,
    marginLeft: 0,
    marginRight: 0,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    ...placeholderExpandedStyles
  };
};
