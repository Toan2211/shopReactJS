import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-control/InputField';
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Button,  Typography, styled} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import PasswordField from '../../../../components/form-control/PasswordField';
// const useStyles = styled(theme => ({
//     root:{
//         paddingTop: theme.spacing(4),
//     },
//     avatar:{
//         margin: '0 auto',
//     },
//     title:{
//         textAlign: 'center',
//     },
//     submit:{

//     }

// }))
// const StyleAvatar = styled(Avatar, )

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const schema = yup.object({
        title: yup.string().required('Please enter title'),
      }).required();
    const form  = useForm({
        defaultValues: {
            fullname: '',
            email: '',
            password: '',
            retypePassword: '',

        },
        resolver: yupResolver(schema)
    })
    const handleSubmit = (value) => {
        const {onSubmit} = props;
        if(onSubmit){
            onSubmit(value);
        }
        form.reset()
    }
    return (
        <div>
            <Avatar >
                <LockOutlined></LockOutlined>
            </Avatar>
            <Typography component= "h3" variant = "h5">
                Create An Account
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name = "fullName" label = "Full Name" form = {form} />
                <InputField name = "email" label = "Email" form = {form} />
                <InputField name = "password" label = "Password" form = {form} />
                <InputField name = "retypePassword" label = "Retype Password" form = {form} />
                <Button variant = "contained" color = "primary">
                    Create an account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;