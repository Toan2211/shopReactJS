import { unwrapResult } from '@reduxjs/toolkit'
import React from 'react'
import PropTypes from 'prop-types'
import RegisterForm from '../RegisterForm'
import { useDispatch } from 'react-redux'
import { register } from '../../userSlice'
import { useSnackbar } from 'notistack'
Register.propTypes = {
    closeDialog: PropTypes.func
}

function Register(props) {
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar()
    const handleSubmit = async values => {
        try {
            values.username = values.email
            const action = register(values)
            const resultAction = await dispatch(action)
            // eslint-disable-next-line no-unused-vars
            const user = unwrapResult(resultAction)
            const { closeDialog } = props
            if (closeDialog) {
                closeDialog()
            }
            enqueueSnackbar('Register sucessfully', {
                variant: 'success'
            })
        } catch (error) {
            enqueueSnackbar(`Error Message: ${error.message}`, {
                variant: 'error'
            })
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    )
}

export default Register
