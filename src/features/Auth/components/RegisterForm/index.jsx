import React from 'react'
import PropTypes from 'prop-types'
import InputField from '../../../../components/form-control/InputField'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Avatar, Button, Typography, styled } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import PasswordField from '../../../../components/form-control/PasswordField'
import { deepOrange } from '@mui/material/colors'

RegisterForm.propTypes = {
    onSubmit: PropTypes.func
}
const AvatarStyle = styled(Avatar)(() => ({
    padding: 8,
    margin: '20px auto'
}))
const ButtonStyle = styled(Button)(() => ({
    width: '100%',
    height: '50px',
    marginTop: '10px'
}))
function RegisterForm(props) {
    const schema = yup
        .object({
            fullName: yup
                .string()
                .required('Please enter fullname')
                .test(
                    'Should has at least 2 words',
                    'Please enter at least 2 words',
                    value => {
                        return value.split(' ').length >= 2
                    }
                ),
            email: yup
                .string()
                .required('Please enter email')
                .email('Please enter invalid email address'),
            password: yup
                .string()
                .required('Please enter password')
                .min(6, 'Please enter at least 6 characters'),
            retypePassword: yup
                .string()
                .required('Please enter retypePassword')
                .oneOf(
                    [yup.ref('password')],
                    'Password does not match'
                )
        })
        .required()
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: ''
        },
        resolver: yupResolver(schema)
    })
    const handleSubmit = async value => {
        const { onSubmit } = props
        if (onSubmit) {
            await onSubmit(value)
        }
    }
    return (
        <div>
            <AvatarStyle sx={{ bgcolor: deepOrange[500] }}>
                <LockOutlined></LockOutlined>
            </AvatarStyle>
            <Typography component="h3" variant="h5" align="center">
                Create An Account
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField
                    name="fullName"
                    label="Full Name"
                    form={form}
                />
                <InputField name="email" label="Email" form={form} />
                <PasswordField
                    name="password"
                    label="Password"
                    form={form}
                />
                <PasswordField
                    name="retypePassword"
                    label="Retype Password"
                    form={form}
                />
                <ButtonStyle
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Create an account
                </ButtonStyle>
            </form>
        </div>
    )
}

export default RegisterForm
