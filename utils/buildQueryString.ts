function isEmptyString(value: any) {
  return typeof value === 'string' && value.length < 1;
}

function isUndefined(value: any) {
  return typeof value === 'undefined';
}

function isNull(value: any) {
  return typeof value === 'object' && !value;
}

function processArrayValue(value: Array<any>) {
  return value.filter((v) => !(isEmptyString(v) || isUndefined(v) || isNull(v))).join(',');
}

function buildQueryString(data: { [key: string]: any }): string {
  if (!data) {
    return '';
  }

  return Object.keys(data)
    .filter((key) => {
      const value = data[key];

      return !(isEmptyString(value) || isUndefined(value) || isNull(value));
    })
    .map((key) => {
      const value = data[key];

      if (typeof value === 'boolean' || typeof value === 'string' || typeof value === 'number') {
        return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
      }

      if (Array.isArray(value)) {
        const urlValue = processArrayValue(data[key]);
        return urlValue ? `${encodeURIComponent(key)}=${encodeURIComponent(processArrayValue(data[key]))}` : undefined;
      }

      throw new Error(`Unknown type for serialization ${typeof value} (${key})`);
    })
    .join('&');
}

export default buildQueryString;
