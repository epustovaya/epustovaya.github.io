import { FieldErrors } from 'react-hook-form';
import { ComponentPropsWithoutRef } from 'react';

export type FormFieldErrors = FieldErrors;

export type WithErrorMessageProps = {
  name?: string;
  errors?: FormFieldErrors;
};

export type FormProps = {
  protect?: boolean;
} & ComponentPropsWithoutRef<'form'>;
