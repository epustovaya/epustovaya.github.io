import { ComponentType, forwardRef, useCallback } from 'react';
import ReactInput from 'input-format/react';
import { parse } from 'input-format';
import { formatValue, parseValue } from './helpers';
import { FieldInputProps } from '../FieldInput/FieldInput.types';

type DatePickerInputProps = Omit<FieldInputProps<'input'>, 'onChange'> & {
  onChange: (value: string) => void;
  inputComponent: ComponentType;
};

export const DatePickerInput = forwardRef((props: DatePickerInputProps, ref) => {
  const { value, onChange, ...restProps } = props;

  const parsedValue = parse(value, 0, parseValue).value;

  const handleChange = useCallback((v) => {
    onChange(formatValue(v).text);
  }, [onChange]);

  return (
    <ReactInput
      ref={ref}
      value={parsedValue}
      onChange={handleChange}
      parse={parseValue}
      format={formatValue}
      {...restProps}
    />
  );
});

if (process.env.NODE_ENV !== 'production') {
  DatePickerInput.displayName = 'DatePickerInput';
}
