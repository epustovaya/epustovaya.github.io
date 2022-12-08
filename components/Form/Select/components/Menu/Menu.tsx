import { CSSObjectWithLabel, MenuProps } from 'react-select';
import styleVariables from 'styles/export.module.scss';

export const menuStyles = (isExpanded = false) => (provided: CSSObjectWithLabel, state: MenuProps): CSSObjectWithLabel => {
  const { selectProps } = state;
  const noLabel = selectProps.customWithLabel === false;
  const isTextInputPhone = selectProps.customVariant === 'textInputPhone';
  const isSearch = selectProps.customVariant === 'search';
  const indentFieldPhone = 4;
  const indentFieldExpanded = 25;
  const indentField = noLabel ? 18 : 10;
  const indent = isTextInputPhone ? indentFieldPhone : indentField;

  return {
    ...provided,
    marginTop: isExpanded ? `${indentFieldExpanded}px` :`${indent}px`,
    marginBottom: `${indent}px`,
    border: isSearch ? 'none' : `1px solid ${styleVariables.cBorderFocused}`,
    borderRadius: styleVariables.borderRadius,
    boxShadow: isSearch ? '0 4px 4px rgba(0, 0, 0, 0.280813)' : 'none',
    backgroundColor: styleVariables.cBg,
    left: isExpanded ? '-12px' : ''
  };
};
