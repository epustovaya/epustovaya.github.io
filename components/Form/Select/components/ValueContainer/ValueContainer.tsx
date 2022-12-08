import React, { Children, isValidElement } from 'react';
import { components, CSSObjectWithLabel, ValueContainerProps } from 'react-select';
import { OptionType } from 'ui/Form/Select/Select.types';
import classes from './ValueContainer.module.scss';
import { getValueForMultiValueContainer } from '../../utils';

const ComponentValueContainer = components.ValueContainer;
const ComponentSingleValue = components.SingleValue;

export const valueContainerStyles =
  (isExpanded) =>
    (provided: CSSObjectWithLabel, state: ValueContainerProps): CSSObjectWithLabel => {
      const { selectProps } = state;
      const isTextInputPhone = selectProps.customVariant === 'textInputPhone';
      const isSearch = selectProps.customVariant === 'search';
      const isTextInputSearchable = selectProps.customVariant === 'searchable';
      const fontSize = isSearch ? '14px' : '16px';
      const fontWeight = isSearch ? '700' : 'normal';

      if (isTextInputPhone) {
        return {
          ...provided,
          input: {
            position: 'absolute'
          },
          display: 'flex',
          padding: '0 0 0 12px',
          marginTop: '-2px',
          flexWrap: 'nowrap',
          flex: '0 0 auto',
          pointerEvents: 'all'
        };
      }

      if (isTextInputSearchable) {
        return {
          ...provided,
          display: 'flex',
          position: 'relative',
          padding: '0',
          fontSize: isSearch ? '14px' : '16px',
          fontWeight: isSearch ? '700' : 'normal',
          lineHeight: '1.5',
          whiteSpace: 'nowrap',
          flexWrap: 'nowrap',
          marginTop: '-2px'
        };
      }

      return {
        ...provided,
        display: 'block',
        position: 'static',
        padding: '0',
        fontSize: isExpanded ? '16px' : fontSize,
        fontWeight: isExpanded ? '400' : fontWeight,
        lineHeight: '1.5',
        whiteSpace: 'nowrap',
        flexWrap: 'nowrap',
        input: {
          position: 'absolute'
        }
      };
    };

const ValueContainer = (props: ValueContainerProps<OptionType>) => {
  const { children, getValue, options, isMulti, selectProps, hasValue, innerProps } = props;

  if (selectProps.customVariant === 'textInputPhone') {
    const value = getValue()[0];

    const Icon = value ? value.icon : undefined;

    return (
      <ComponentValueContainer {...props}>
        {Icon && <Icon className={classes.ValueContainer__Flag} />}
        {Children.map(children, (child) =>
          child && isValidElement(child) && child.type !== ComponentSingleValue ? child : null
        )}
      </ComponentValueContainer>
    );
  }

  if (isMulti) {
    const value = hasValue ? getValueForMultiValueContainer(getValue(), options) : null;

    return (
      <ComponentValueContainer {...props}>
        {value && (
          <ComponentSingleValue {...props} innerProps={innerProps} data={value}>
            {value.label}
          </ComponentSingleValue>
        )}
        {Children.map(children, (child) =>
          child && isValidElement(child) && child.type !== components.MultiValue ? child : null
        )}
      </ComponentValueContainer>
    );
  }

  return <ComponentValueContainer {...props}>{children}</ComponentValueContainer>;
};

export default ValueContainer;
