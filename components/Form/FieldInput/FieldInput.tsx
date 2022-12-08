import FieldInputBase from 'ui/Form/FieldInput/FieldInputBase';
import { withErrorMessage } from '../withErrorMessage';
import { FieldInputProps } from './FieldInput.types';
import { WithErrorMessageProps } from '../Form.types';

const FieldInput = withErrorMessage<HTMLInputElement, WithErrorMessageProps & FieldInputProps<'input'>>(FieldInputBase);

export default FieldInput;
