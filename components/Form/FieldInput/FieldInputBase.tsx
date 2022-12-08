/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,prefer-arrow-callback */
import React, { AnimationEventHandler, forwardRef, ReactNode, useCallback, useState } from 'react';
import clsx from 'clsx';
import size from 'lodash/size';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';
import { useFieldHover } from 'hooks/useFieldHover';
import { useFieldFocus } from 'hooks/useFieldFocus';
import Button from 'ui/Button';
import IconClose from 'ui/Icon/24/IconClose';
import { FieldInputComponent, FieldInputElement, FieldInputProps } from './FieldInput.types';
import classes from './FieldInput.module.scss';

function renderHint(hint: ReactNode) {
  return hint ? <div className={classes.FieldInput__Hint}>{hint}</div> : null;
}

function validate(inputValue: string, maskedInput: boolean) {
  return maskedInput ? inputValue.replace(/\D/g, '') : inputValue;
}

function renderMaxLength(
  maxLength: number,
  value: string,
  type,
  counterHelperVisibility,
  counterHelperMessage,
  hideMaxLength
) {
  const { length } = `${value}`;

  return value && maxLength && !hideMaxLength ? (
    <div className={classes.FieldInput__Counter}>
      {`${length}/${maxLength}${counterHelperVisibility ? ` ${counterHelperMessage}` : ''}`}
    </div>
  ) : null;
}

function stringValueMapper(v: any) {
  return `${v}`;
}

function normalizeValue(v: any, mapper: (any) => string): string | undefined {
  if (isNull(v)) {
    return '';
  }

  if (isUndefined(v)) {
    return undefined;
  }

  return mapper(v);
}

const FieldInputBase: FieldInputComponent = forwardRef(function FieldInput<C extends FieldInputElement = 'input'>(
  props: FieldInputProps<C>,
  ref: PolymorphicRef<C>
) {
  const {
    as: Component = 'input',
    className,
    classNameLabel,
    disabled,
    errorMessage,
    hasError,
    helperMessage,
    hideMaxLength,
    id,
    label,
    masked,
    maxLength,
    onBlur,
    onFocus,
    placeholder,
    type = 'text',
    value: rawValue,
    valueMapper = stringValueMapper,
    render,
    defaultValue: rawDefaultValue,
    variant,
    isFocused,
    onMouseEnter,
    onMouseLeave,
    isNotFilled = false,
    renderAddon,
    clearValue,
    readOnly,
    behavior,
    onClick,
    counterHelperVisibility = true,
    counterHelperMessage = 'characters maximum',
    isExpanded = false,
    ...inputProps
  } = props;

  const value = normalizeValue(rawValue, valueMapper);
  const [focused, handleFocus, handleBlur] = useFieldFocus(onFocus, onBlur, disabled);
  const [hovered, handleMouseEnter, handleMouseLeave] = useFieldHover(onMouseEnter, onMouseLeave);
  const [isAutofilled, setIsAutofilled] = useState(false);
  const fieldClassNames = clsx(
    classes.FieldInput,
    isExpanded && classes.FieldlExpanded,
    !label && classes.FieldInput_noLabel,
    disabled && classes.FieldInput_disabled,
    (focused || isFocused) && classes.FieldInput_focused,
    hovered && classes.FieldInput_hovered,
    (size(value || placeholder) || isAutofilled) && !isNotFilled && classes.FieldInput_filled,
    hasError && classes.FieldInput_error,
    Component === 'textarea' && classes.FieldInput_type_textarea,
    variant && classes[`FieldInput_variant_${variant}`],
    variant && isExpanded && classes[`FieldInput_variant_${variant}_expanded`],
    renderAddon && classes.FieldInput_withAddon,
    behavior && classes[`FieldInput_behavior_${behavior}`],
    clearValue && classes.FieldInput_withClear,
    className
  );
  const labelClassNames = clsx(classes.FieldInput__Label, classNameLabel);
  const hintElement = renderHint(hasError ? errorMessage : helperMessage);
  const maxLengthElement = renderMaxLength(
    maxLength,
    value,
    type,
    counterHelperVisibility,
    counterHelperMessage,
    hideMaxLength
  );

  const handleAutoFillDetect: AnimationEventHandler = (e) => {
    const { animationName } = e;

    switch (animationName) {
      case 'onAutoFillStart':
        setIsAutofilled(true);
        break;
      case 'onAutoFillCancel':
        setIsAutofilled(false);
        break;
      default:
    }
  };

  const handleClearValue = useCallback(
    (e) => {
      if (clearValue) {
        e.preventDefault();
        e.stopPropagation();
        clearValue();
      }
    },
    [clearValue]
  );

  const getLabelProps = useCallback(() => ({ htmlFor: id, className: labelClassNames }), [id, labelClassNames]);

  const handleBringFocus = useCallback((e) => {
    const focusable = e.currentTarget.querySelector('input,textarea,select');

    if (focusable) {
      focusable.focus();
    }
  }, []);

  return (
    <>
      <div className={fieldClassNames}>
        <div
          className={clsx(classes.FieldInput__FieldContainer, isExpanded && classes.FieldInput__FieldContainer_expanded)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleBringFocus}
        >
          {label &&
            (typeof label === 'function' ? label(getLabelProps()) : <label {...getLabelProps()}>{label}</label>)}
          {render ? (
            render({
              onFocus: handleFocus,
              onBlur: handleBlur
            })
          ) : (
            <Component
              {...inputProps}
              ref={ref}
              className={classes.FieldInput__Field}
              id={id}
              maxLength={maxLength}
              placeholder={placeholder}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={validate(value, masked)}
              disabled={disabled}
              type={type}
              onAnimationStart={handleAutoFillDetect}
              readOnly={readOnly || behavior === 'button'}
              onClick={onClick}
            />
          )}
          {clearValue && (
            <Button
              variant="base"
              onClick={handleClearValue}
              className={clsx(
                classes.FieldInput__ClearButton,
                Boolean(size(value) && focused) && classes.FieldInput__ClearButton_visible
              )}
              tabIndex={-1}
            >
              <IconClose className={classes.FieldInput__ClearButtonIcon} />
            </Button>
          )}
        </div>
        {renderAddon?.({
          className: classes.FieldInput__Addon,
          disabled
        })}
      </div>
      {(hintElement || maxLengthElement) && (
        <div className={classes.FieldInput__Helpers}>
          {hintElement}
          {maxLengthElement}
        </div>
      )}
    </>
  );
});

export default FieldInputBase;
