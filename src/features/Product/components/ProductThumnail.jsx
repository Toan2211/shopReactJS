import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';

ProductThumnail.propTypes = {
    
};

function ProductThumnail({product}) {
    const thumbnailUrl = product.thumbnail ? `https://api.ezfrontend.com${product.thumbnail?.url}` : 'https://via.placeholder.com/300';

    return (
        <Box>
            <img src = {thumbnailUrl}   width = "100%" alt = {product.name} ></img>
        </Box>
    );
}

export default ProductThumnail;