import reactStringReplace from 'react-string-replace';
import { Fragment, ReactNode, ReactNodeArray } from 'react';
import { notNullNotUndefined } from './value';

const regex = /\{([0-9a-zA-Z_]+)\}/g;

type StringTemplateValue = number | string;

type StringTemplateValuesSimple = Record<string, StringTemplateValue>;

type StringTemplateValuesNodes = Record<string, ReactNode>;

export function stringTemplate(
  string: string,
  valuesSimple?: StringTemplateValuesSimple,
  valuesNodes?: undefined
): string;
export function stringTemplate(
  string: string,
  valuesSimple?: StringTemplateValuesSimple,
  valuesNodes?: StringTemplateValuesNodes
): string | ReactNodeArray;
export function stringTemplate(
  string: string,
  valuesSimple?: StringTemplateValuesSimple,
  valuesNodes?: StringTemplateValuesNodes
) {
  if (!valuesNodes && !valuesSimple) {
    return string;
  }

  let simpleResult = string;

  if (valuesSimple) {
    simpleResult = string.replace(regex, (match, substring, offset) => {
      // Escape double brackets `{{value}}`
      if (string[offset - 1] === '{' && string[offset + match.length] === '}') {
        return substring;
      }

      if (notNullNotUndefined(valuesSimple[substring])) {
        return valuesSimple[substring];
      }

      if (valuesNodes && notNullNotUndefined(valuesNodes[substring])) {
        return match;
      }

      return '';
    });
  }

  if (valuesNodes) {
    return reactStringReplace(simpleResult, regex, (match, i) => (
      <Fragment key={match + i}>{valuesNodes[match] || match}</Fragment>
    ));
  }

  return simpleResult;
}
