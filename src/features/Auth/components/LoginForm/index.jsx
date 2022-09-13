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

LoginForm.propTypes = {
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
function LoginForm(props) {
    const schema = yup
        .object({
            identifier: yup
                .string()
                .required('Please enter email')
                .email('Please enter invalid email address'),
            password: yup.string().required('Please enter password')
        })
        .required()
    const form = useForm({
        defaultValues: {
            identifier: '',
            password: ''
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
                Sign in
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField
                    name="identifier"
                    label="Email"
                    form={form}
                />
                <PasswordField
                    name="password"
                    label="Password"
                    form={form}
                />
                <ButtonStyle
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Sign In
                </ButtonStyle>
            </form>
        </div>
    )
}

export default LoginForm
