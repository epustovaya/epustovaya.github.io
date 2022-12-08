import React, { forwardRef, memo, useCallback, useMemo, useState } from 'react';
import ReactSelect, { ActionMeta } from 'react-select';
import FieldInput from 'ui/Form/FieldInput/FieldInput';
import { OptionType, SelectBaseProps, SelectProps } from './Select.types';
import { provideComponents, provideStyles } from './components';
import { buildInternalOptions, getIsGrouped, getOnChangeValue, provideSelectValue } from './utils';

export const SelectBase = memo((props: SelectBaseProps) => {
  const {
    placeholder,
    label,
    value,
    defaultValue,
    disabled,
    menuIsOpen: menuIsOpenInitial,
    hasError,
    isMulti,
    options,
    variant,
    onChange,
    id,
    errors,
    name,
    helperMessage,
    checkboxPosition,
    onMenuClose,
    onMenuOpen,
    zIndex,
    isSearchable,
    isExpanded,
    maxMenuHeight = 280,
    withSelectAll,
    selectAllLabel = 'Select All',
    classNameOptionIcon,
    ...restProps
  } = props;
  const [menuIsOpen, setMenuIsOpen] = useState(menuIsOpenInitial);

  /**
   * Without options memoization select dropdown re-renders on every change, which leads to loss of menu item focus.
   */
  const optionsInternal = useMemo(
    () =>
      buildInternalOptions({
        options,
        isMulti,
        withSelectAll,
        selectAllLabel
      }),
    [isMulti, options, selectAllLabel, withSelectAll]
  );

  const handleChange = useCallback(
    (newValue: OptionType | OptionType[] | null, actionMeta: ActionMeta<OptionType>) => {
      if (onChange) {
        onChange(getOnChangeValue(newValue, actionMeta, options), newValue, actionMeta);
      }
    },
    [onChange, options]
  );

  return (
    <ReactSelect
      {...restProps}
      inputId={id}
      value={provideSelectValue(value, options, optionsInternal, isMulti)}
      name={name}
      placeholder={placeholder || null}
      options={optionsInternal}
      components={provideComponents()}
      styles={provideStyles({ variant, zIndex, isExpanded, isGrouped: getIsGrouped(options) })}
      isDisabled={disabled}
      isSearchable={!!isSearchable}
      isMulti={isMulti}
      hideSelectedOptions={false}
      closeMenuOnSelect={!isMulti}
      menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
      onMenuOpen={() => {
        setMenuIsOpen(true);
        onMenuOpen?.();
      }}
      onMenuClose={() => {
        setMenuIsOpen(false);
        onMenuClose?.();
      }}
      onChange={handleChange}
      customMenuIsOpen={menuIsOpen}
      customVariant={isSearchable ? 'searchable' : variant}
      customWithLabel={Boolean(label)}
      customCheckboxPosition={checkboxPosition}
      customClassNameOptionIcon={classNameOptionIcon}
      maxMenuHeight={maxMenuHeight}
    />
  );
});

export const Select = memo(
  forwardRef<HTMLInputElement, SelectProps>((props, ref) => {
    const {
      placeholder,
      label,
      value,
      disabled,
      menuIsOpen: menuIsOpenInitial,
      id,
      errors,
      name,
      helperMessage,
      variant,
      zIndex,
      isExpanded = false
    } = props;
    const [menuIsOpen, setMenuIsOpen] = useState(menuIsOpenInitial);

    return (
      <FieldInput
        ref={ref}
        id={id}
        label={label}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        errors={errors}
        name={name}
        helperMessage={helperMessage}
        isFocused={menuIsOpen}
        variant={variant === 'search' ? 'searchSelect' : 'select'}
        isExpanded={isExpanded}
        render={({ onFocus, onBlur }) => (
          <SelectBase
            {...props}
            onFocus={onFocus}
            onBlur={onBlur}
            menuIsOpen={menuIsOpen}
            onMenuOpen={() => setMenuIsOpen(true)}
            onMenuClose={() => setMenuIsOpen(false)}
            zIndex={zIndex}
          />
        )}
      />
    );
  })
);

if (process.env.NODE_ENV !== 'production') {
  SelectBase.displayName = 'SelectBase';
  Select.displayName = 'Select';
}
