import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import categoryApi from '../../../../api/categoryApi';

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};
const style = {
    ul: {
        listStyleType: 'none',
        margin: '0',
        padding: '0',
        cursor: 'pointer',
    },
    li:{
        margin: '5px 0',
    }
};
function FilterByCategory({onChange}) {
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        (async () => {
            try{
                const reponse = await categoryApi.getAll();
                setCategoryList(reponse);
            }
            catch(err){
                console.log(err);
            }
        })()
    }, [])
    const handleClick = (category) => {
        if(onChange) 
        {onChange(category.id);}
    }
    return (
        <Box >
            <Typography variant = "subtitle1" fontWeight = "bold">DANH MỤC SẢN PHẨM</Typography>
            <ul style = {style.ul}>
                {categoryList.map(category =>
                 <li key = {category.id} onClick = {() => handleClick(category)} style = {style.li} >
                 <Typography variant = "body2" sx = {{}}>{category.name}</Typography>
                 </li>)}
            </ul>
        </Box>
    );
}

export default FilterByCategory;