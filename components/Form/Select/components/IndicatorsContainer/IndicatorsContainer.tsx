import { CSSObjectWithLabel, IndicatorsContainerProps } from 'react-select';

export const indicatorsContainerStyles = (isExpanded = false) => (
  provided: CSSObjectWithLabel,
  state: IndicatorsContainerProps
): CSSObjectWithLabel => {
  const { selectProps } = state;
  const isTextInputPhone = selectProps.customVariant === 'textInputPhone';

  if (isTextInputPhone) {
    return {
      ...provided,
      padding: '0 8px 0 4px',
      '& > *': {
        padding: '0 !important'
      },
      pointerEvents: 'all'
    };
  }

  return {
    ...provided,
    position: 'absolute',
    right: '0',
    top: !isExpanded && '0',
    bottom: '0',
    padding: '0 12px',
    '& > *': {
      padding: '0 !important'
    }
  };
};
