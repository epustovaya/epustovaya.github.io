import React, { ElementType, forwardRef } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import get from 'lodash/get';
import { FormFieldErrors, WithErrorMessageProps } from './Form.types';

function hasError(errors: FormFieldErrors, name: string) {
  return Boolean(errors && get(errors, name));
}

export function withErrorMessage<T, P extends WithErrorMessageProps = WithErrorMessageProps>(
  FieldComponent: ElementType
) {
  const FieldComponentWithError = forwardRef<T, P>((props, ref) => {
    const { name, errors, ...fieldProps } = props;

    return (
      <FieldComponent
        {...fieldProps}
        ref={ref}
        name={name}
        hasError={hasError(errors, name)}
        errorMessage={<ErrorMessage errors={errors} name={name} />}
      />
    );
  });

  if (process.env.NODE_ENV === 'development') {
    FieldComponentWithError.displayName = 'FieldComponentWithError';
  }

  return FieldComponentWithError;
}
