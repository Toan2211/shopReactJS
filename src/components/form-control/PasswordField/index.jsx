/* eslint-disable no-unused-vars */
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from '@mui/material'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disable: PropTypes.bool
}

function PasswordField(props) {
    const { form, name, label } = props
    const { control } = form

    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div>
            <Controller
                name={name}
                control={control}
                render={({
                    field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, error }
                }) => (
                    <>
                        <FormControl
                            error={isTouched && invalid}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        >
                            <InputLabel>{label}</InputLabel>
                            <OutlinedInput
                                id={name}
                                error={invalid}
                                type={
                                    showPassword ? 'text' : 'password'
                                }
                                label={label}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={
                                                toggleShowPassword
                                            }
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <Visibility />
                                            ) : (
                                                <VisibilityOff />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelwidth={70}
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
                            />
                        </FormControl>
                        <FormHelperText error={invalid}>
                            {error && error.message}
                        </FormHelperText>
                    </>
                )}
            />
        </div>
    )
}

export default PasswordField
