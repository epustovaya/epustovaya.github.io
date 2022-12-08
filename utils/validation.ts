import { isPossiblePhoneNumber } from 'react-phone-number-input';

const REQUIRED_TEXT = 'Required';

export const VALIDATION = {
  rules: {
    required: (message?: string) => ({
      required: message || REQUIRED_TEXT
    }),
    phone: {
      required: 'Phone number is required',
      validate: {
        isValid: (value) => (isPossiblePhoneNumber(value) ? null : 'Invalid phone number')
      }
    },
    trueCheckbox: {
      required: REQUIRED_TEXT,
      validate: {
        isTrue: (v) => v === true || v === 'true'
      }
    },
    ssn: (message?: string) => ({
      required: message || REQUIRED_TEXT,
      pattern: {
        value: /^\d+$/,
        message: 'Invalid SSN code'
      }
    }),
    zip: (message?: string) => ({
      required: message || REQUIRED_TEXT,
      pattern: {
        value: /^\d+$/,
        message: 'Invalid ZIP code'
      }
    }),
    stripeElement: {
      required: REQUIRED_TEXT,
      validate: {
        main: (value: any) => !value?.error?.message
      }
    }
  }
};
