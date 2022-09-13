import React from 'react'
import { Box, Link } from '@mui/material'
import { NavLink } from 'react-router-dom'

function ProductMenu() {
    return (
        <Box
            component="ul"
            sx={{
                display: 'flex',
                listStyleType: 'none',
                justifyContent: 'center'
            }}
        >
            <li style={{ marginRight: '10px' }}>
                <Link component={NavLink} to=".">
                    Description
                </Link>
            </li>
            <li style={{ marginRight: '10px' }}>
                <Link component={NavLink} to="./addtional">
                    Additional Information
                </Link>
            </li>
            <li style={{ marginRight: '10px' }}>
                <Link component={NavLink} to="./reviews">
                    Reviews
                </Link>
            </li>
        </Box>
    )
}

export default ProductMenu
