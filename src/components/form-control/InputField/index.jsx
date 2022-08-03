import React from 'react';
import PropTypes from 'prop-types';
import { OutlinedInput, TextField } from '@mui/material';
import {Controller} from 'react-hook-form';

IndputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function IndputField(props) {
    const {form, name, label, disable} = props;
    return (
      //   <Controller
      //   name={name}
      //   control={form.control}
      //   render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
      //     <TextField
      //       margin="normal"
      //       variant="outlined"
      //       fullWidth
      //       name={name}
      //       label={label}
      //       error={invalid}
      //       helperText={error?.message}
      //       onChange={onChange}
      //       onBlur={onBlur}
      //       value={value}
      //       disabled={disable}
      //     />
      //   )}
      // ></Controller>

        <Controller
        name={name}
        control={form.control}
        render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
          <OutlinedInput
            margin="normal"
            variant="outlined"
            fullWidth
            type = "number"
            name={name}
            label={label}
            error={invalid}
            helperText={error?.message}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            disabled={disable}
          />
          
        )}
      ></Controller>
        
    );
}

export default IndputField;