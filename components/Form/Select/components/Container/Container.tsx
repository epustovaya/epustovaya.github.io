import { ContainerProps, CSSObjectWithLabel } from 'react-select';

export function containerStyles(provided: CSSObjectWithLabel, state: ContainerProps): CSSObjectWithLabel {
  const { selectProps } = state;
  const isTextInputPhone = selectProps.customVariant === 'textInputPhone';

  if (isTextInputPhone) {
    return {
      ...provided,
      display: 'flex',
      position: 'absolute',
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
      zIndex: '1',
      pointerEvents: 'none'
    };
  }

  return {
    ...provided,
    position: 'static'
  };
}
