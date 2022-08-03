import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};

function FilterByPrice({onChange}) {
    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0
    }) 
    const handleSubmit = () => {
        if(onChange) onChange(values);
        setValues({
            salePrice_gte: 0,
            salePrice_lte: 0
        });
    }
    const handlePriceChange = (e) => {
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }))
    }
    return (
        <Box>
            <Typography variant = "subtitle2" fontWeight = "bold" >Khoảng giá</Typography>
           <Box sx = {{display: 'flex', flexflow: 'row nowrap', alignItems: 'center', justifyContent: 'center'}}>
                <TextField variant="standard" margin="normal" name = "salePrice_gte" value  = {values.salePrice_gte} onChange ={handlePriceChange} inputProps = {{style: {textAlign: 'center'}}}></TextField>
                <span>-</span>
                <TextField variant="standard" margin="normal" name = "salePrice_lte" value = {values.salePrice_lte} onChange ={handlePriceChange} inputProps = {{style: {textAlign: 'center'}}}></TextField>
           </Box>
            <Button variant = "outlined" color = "primary" onClick  = {handleSubmit} margin = "normal" size = "small">Áp dụng</Button>
        </Box>


        );
}

export default FilterByPrice;