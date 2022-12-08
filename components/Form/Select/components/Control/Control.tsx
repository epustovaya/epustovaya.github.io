import { ControlProps, CSSObjectWithLabel } from 'react-select';

export function controlStyles(provided: CSSObjectWithLabel, state: ControlProps): CSSObjectWithLabel {
  const { selectProps } = state;
  const isTextInputPhone = selectProps.customVariant === 'textInputPhone';
  const isSearch = selectProps.customVariant === 'search';

  if (isTextInputPhone) {
    return {
      ...provided,
      backgroundColor: 'transparent',
      border: '0',
      borderRadius: '0',
      boxShadow: 'none',
      minHeight: '100%',
      pointerEvents: 'none',
      cursor: state.isDisabled ? 'default' : 'pointer',
      width: '100%',
      justifyContent: 'flex-start'
    };
  }

  return {
    ...provided,
    backgroundColor: 'transparent',
    border: '0',
    borderRadius: '0',
    flexWrap: 'nowrap',
    boxShadow: 'none',
    width: '100%',
    height: '100%',
    minHeight: isSearch ? '21px' : '24px',
    position: 'static',
    // cheat to handle menu toggle on parent container
    '::before': {
      display: 'block',
      position: 'absolute',
      content: '""',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      cursor: selectProps.isDisabled ? 'default' : 'pointer',
      zIndex: '1'
    }
  };
}
