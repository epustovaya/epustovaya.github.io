import padStart from 'lodash/padStart';

export const formatCents = (v) => (v ? padStart(v.toString(), 2, '0') : '00');
