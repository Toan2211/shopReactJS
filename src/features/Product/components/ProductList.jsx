import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';
import Product from './Product';

ProductList.propTypes = {
    length: PropTypes.number,
};
ProductList.defaultProps = {
    length: 6,
};
function ProductList({data}) {
    return (
        <Box>
            <Grid container>
                {data.map((product,index) => (
                    <Grid item key = {product.id} xs = {12} sm = {6} md = {4} lg = {3}> 
                        <Box padding ={1}>
                           <Product product = {product}/>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductList;