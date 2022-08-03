import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from '@mui/material';
import {NavLink,useLocation} from 'react-router-dom'
ProductMenu.propTypes = {
    
};

function ProductMenu(props) {
    return (
        <Box component = "ul" sx ={{display: 'flex', listStyleType: 'none', justifyContent: 'center'}}>
            <li style = {{marginRight: '10px'}}>
                <Link  component = {NavLink} to = ".">Description</Link>
            </li>
            <li style = {{marginRight: '10px'}}>
                <Link component = {NavLink} to = "./addtional">Additional Information</Link>
            </li>
            <li style = {{marginRight: '10px'}}>
                <Link  component = {NavLink} to = "./reviews">Reviews</Link>
            </li>
        </Box>
    );
}

export default ProductMenu;