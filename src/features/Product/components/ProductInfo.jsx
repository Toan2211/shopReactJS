import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';



function ProductInfo({product = {}}) {
    const {name, shortDescription, originalPrice, promotionPercent} = product;
    return (
        <Box>
            <Typography component = "h1" variant = "h5" align = "center">{name}</Typography>
            <Typography variant = "body2" style ={{margin: '10px 0'}}>{shortDescription}</Typography>
            <Box style = {{backgroundColor: '#EFF0F5', padding: '10px'}}>
                <Box component = "span" style = {{marginRight: '10px', fontSize: '30px', fontWeight: 'bold', color: 'red'}}  >
                {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                </Box>
                {
                    promotionPercent > 0 &&
                    <>
                        <Box component = "span" style = {{marginRight: '10px', fontSize: '20px', textDecoration: 'line-through'}}>
                        {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(originalPrice)}
                        </Box>
                        <Box component = "span" style = {{}}>{`-${promotionPercent}%`}</Box>
                    </>
                }
            </Box>
        </Box>
    );
}

export default ProductInfo;