import React from 'react';
import PropTypes from 'prop-types';
import { Box, FormControl, FormHelperText, IconButton, OutlinedInput, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool
};

function QuantityField(props) {
    const {form, name, label, disabled} = props;
    const {errors} = form.formState;
    const {setValue} = form;
    const hasError = !!errors[name];

    return (
        <FormControl error = {hasError} fullWidth margin = "normal" variant = "outlined" size = "small">
            <Typography>{label}</Typography>

            <Controller
                name = {name}
                control = {form.control}
                render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
                    <Box>
                        <IconButton onClick = {() =>{ value > 1 ? setValue (name, Number(value-1)) : setValue (name, Number(1))}} >
                            <RemoveCircleOutlineRoundedIcon  />
                        </IconButton>
                        <OutlinedInput 
                            id = {name}
                            type = "number"
                            disabled = {disabled}
                            value = {value}
                            onChange = {onChange}
                            onBlur = {onBlur}
                            helpertext={error?.message}
                        />
                        <IconButton onClick = {() =>{ setValue (name, Number(value+1))}} >
                            <AddCircleOutlineRoundedIcon/>
                        </IconButton>
                    </Box>
                )}
                
            />
            <FormHelperText>{errors?.message}</FormHelperText>
        </FormControl>
    );
}

export default QuantityField;