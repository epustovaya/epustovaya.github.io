type ExpectedQueryParamType = string | number | boolean;

function isTrue(value: string): boolean {
  return value && value !== 'false' && value !== 'no';
}

export function getQueryParam<T extends ExpectedQueryParamType = string>(query: NodeJS.Dict<string | string[]>, name: string, defaultValue: T): T {
  const value = query[name];

  if (value === undefined) {
    return defaultValue;
  }

  const singleValue = Array.isArray(value) ? value[0] : value;

  if (typeof defaultValue === 'number') {
    const numberValue = parseFloat(singleValue);

    return Number.isNaN(numberValue) ? defaultValue : numberValue as unknown as T;
  }

  if (typeof defaultValue === 'boolean') {
    return isTrue(singleValue) as unknown as T;
  }

  return singleValue as unknown as T;
}
