import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

Product.propTypes = {
    product: PropTypes
}

function Product({ product }) {
    const navigate = useNavigate()
    const thumbnailUrl = product.thumbnail
        ? `https://api.ezfrontend.com${product.thumbnail && product.thumbnail.url}`
        : 'https://via.placeholder.com/300'
    const handleClick = () => {
        navigate(`/products/${product.id}`)
    }
    return (
        <Box
            padding={1}
            boxShadow=""
            onClick={handleClick}
            sx={{ cursor: 'pointer' }}
        >
            <Box
                minHeight="220px"
                borderRadius="5px"
                overflow="hidden"
            >
                <img
                    src={thumbnailUrl}
                    width="100%"
                    alt={product.name}
                ></img>
            </Box>

            <Typography variant="body2">{product.name}</Typography>
            <Typography variant="body2">
                <Box
                    component="span"
                    fontsize="18px"
                    fontWeight="bold"
                    mr="10px"
                >
                    {new Intl.NumberFormat('vn-VN', {
                        style: 'currency',
                        currency: 'VND'
                    }).format(product.salePrice)}
                </Box>
                {product.promotionPercent > 0
                    ? `-${product.promotionPercent}%`
                    : ''}
            </Typography>
        </Box>
    )
}

export default Product
