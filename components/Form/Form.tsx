import React from 'react';
import useFormProtection from '../../hooks/useFormProtection';
import { FormProps } from './Form.types';
import classes from './Form.module.scss';

const Form = (props: FormProps) => {
  const { children, protect = false, onSubmit, ...formProps } = props;
  const [handleSubmit, handleTouch] = useFormProtection(protect, onSubmit);

  return (
    <form onSubmit={handleSubmit} {...formProps}>
      {children}
      {protect && (
        <input
          type="checkbox"
          className={classes.Protect}
          name="confirm"
          onChange={handleTouch}
          onFocus={handleTouch}
          tabIndex={-1}
        />
      )}
    </form>
  );
};

export default Form;
