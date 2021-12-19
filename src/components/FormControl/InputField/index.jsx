import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

function InputField(props) {
  const { form, name, label } = props;
  const {
    formState: { errors },
  } = form;
  const hasError = errors[name];
  const error = errors;

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <TextField
          variant="outlined"
          fullWidth
          label={label}
          onChange={onChange}
          error={!!hasError}
          helperText={error[name]?.message}
        />
      )}
    />
  );
}

export default InputField;
