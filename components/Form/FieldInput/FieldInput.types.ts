import { ElementType, FocusEventHandler, ReactElement, ReactNode } from 'react';
import { FormFieldErrors } from '../Form.types';

/**
 * 'input' | 'textarea'
 */
export type FieldInputElement = ElementType;

type RenderProps = {
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
};

type RenderAddonProps = {
  disabled: boolean;
  className: string;
};

type FieldInputBaseProps = {
  errors?: FormFieldErrors;
  errorMessage?: ReactNode;
  hasError?: boolean;
  helperMessage?: ReactNode;
  hideMaxLength?: boolean;
  label?: ((renderProps: { htmlFor: string; className: string }) => ReactNode) | string;
  masked?: boolean;
  maxLength?: number;
  value?: any;
  valueMapper?: (value: any) => string;
  render?: (renderProps: RenderProps) => ReactNode;
  variant?: 'select' | 'phone' | 'search' | 'searchSelect';
  isNotFilled?: boolean;
  classNameLabel?: string;
  isFocused?: boolean;
  renderAddon?: (renderProps: RenderAddonProps) => ReactNode;
  clearValue?: () => void;
  behavior?: 'button';
  counterHelperVisibility?: boolean;
  counterHelperMessage?: string;
  isExpanded?: boolean;
};

export type FieldInputProps<C extends FieldInputElement> = PolymorphicComponentPropsWithRef<C, FieldInputBaseProps>;

export type FieldInputComponent = <C extends FieldInputElement = 'input'>(
  props: FieldInputProps<C>
) => ReactElement | null;
