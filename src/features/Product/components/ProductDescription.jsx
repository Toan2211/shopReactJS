import React from 'react';
import PropTypes from 'prop-types';
import {Paper } from '@mui/material';

ProductDescription.propTypes = {
    
};

function ProductDescription({product= {}}) {
    return (
        <Paper elevation ={0} style = {{pading: '10px'}}>
            <div dangerouslySetInnerHTML = {{__html: product.description}} /> 
        </Paper>
    );
}

export default ProductDescription;