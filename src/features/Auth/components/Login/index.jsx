import {unwrapResult} from '@reduxjs/toolkit'
import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux'
import { login } from '../../userSlice';
import  {useSnackbar} from 'notistack';
import LoginForm from '../LoginForm';
Login.propTypes = {
    closeDialog: PropTypes.func,
};

function Login(props) {
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar()
    const handleSubmit = async (values) => {

        try{
            const action = login(values)
            const resultAction = await dispatch(action)
            const user = unwrapResult(resultAction)
            const {closeDialog} = props
            if(closeDialog)
                {
                    closeDialog()
                }
        }
        catch (error){
            console.log('failed login:', error)
            enqueueSnackbar(`Error Message: ${error.message}`, { variant: 'error' })
        }
    }
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;