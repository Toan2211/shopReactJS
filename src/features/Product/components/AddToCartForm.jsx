import React from 'react'
import PropTypes from 'prop-types'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { Button } from '@mui/material'
import QuantityField from '../../../components/form-control/QuantityField'
AddToCartForm.propTypes = {
    onSubmit: PropTypes.func
}

function AddToCartForm({ onSubmit = {} }) {
    const schema = yup
        .object({
            quantity: yup
                .number()
                .required('Bắt buộc')
                .min(1, 'Lớn hơn 1')
                .typeError('Nhập số')
        })
        .required()
    const form = useForm({
        defaultValues: {
            quantity: 1
        },
        resolver: yupResolver(schema)
    })
    const handleSubmit = async values => {
        if (onSubmit) {
            await onSubmit(values)
        }
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <QuantityField
                name="quantity"
                label="Số lượng"
                form={form}
            />

            <Button variant="contained" color="primary" type="submit">
                Add To Cart
            </Button>
        </form>
    )
}

export default AddToCartForm
