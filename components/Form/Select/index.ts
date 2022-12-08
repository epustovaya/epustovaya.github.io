import dynamic from 'next/dynamic';
import { SelectProps } from 'ui/Form/Select/Select.types';

export const Select = dynamic<SelectProps>(
  import('./Select').then((module) => module.Select),
  { ssr: false }
);

export const SelectBase = dynamic<SelectProps>(
  import('./Select').then((module) => module.SelectBase),
  { ssr: false }
);
