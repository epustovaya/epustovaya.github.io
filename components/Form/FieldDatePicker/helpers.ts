import { templateParser, templateFormatter, parseDigit } from 'input-format';

const TEMPLATE = 'xx/xx/xxxx';

export const parseValue = templateParser(TEMPLATE, parseDigit);

export const formatValue = templateFormatter(TEMPLATE);

