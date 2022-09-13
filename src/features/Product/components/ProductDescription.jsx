import React from 'react'
import { Paper } from '@mui/material'

function ProductDescription({ product = {} }) {
    return (
        <Paper elevation={0} style={{ pading: '10px' }}>
            <div
                dangerouslySetInnerHTML={{
                    __html: product.description
                }}
            />
        </Paper>
    )
}

export default ProductDescription
