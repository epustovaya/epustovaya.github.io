import { ResultError } from '../types/ResultError';

export function getErrorByCode(code: number, errors: ResultError[]) {
  return errors?.find((i) => i?.code === code);
}

export function getErrorsFilteredByCodeList(codeList: number[], errors: ResultError[]) {
  if (!codeList || codeList.length === 0) {
    return errors;
  }

  return errors.filter((error) => !codeList.includes(error.code));
}

export class ApiError extends Error {
  errors: ResultError[] | null;

  constructor(message: string, errors: ResultError[]) {
    super(message);

    this.errors = errors;
  }

  get name() {
    return this.constructor.name;
  }

  getErrorByCode(code: number) {
    return getErrorByCode(code, this.errors);
  }

  getErrorsFilteredByCodeList(codeList: number[]) {
    return getErrorsFilteredByCodeList(codeList, this.errors);
  }
}
