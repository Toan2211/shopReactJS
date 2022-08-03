import React from 'react';
import PropTypes from 'prop-types';
import { cartItemsCountSelector, cartTotalSelector } from './selectors';
import {useSelector} from 'react-redux'
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
CartFeature.propTypes = {
    
};

function CartFeature(props) {
    const cartItemTotal= useSelector(cartTotalSelector);
    const cartItemCount= useSelector(cartItemsCountSelector);
    const products = useSelector(state => state.cart);
    const cartItems = products.cartItems;

    const getThumbnail = function(product){
        return product.thumbnail ? `https://api.ezfrontend.com${product.thumbnail?.url}` : 'https://via.placeholder.com/300';
    }
    return (
        <Box margin = "50px 0">
        
        <Container>
        <Paper elevation={0} padding = "40px" >
            <Grid container spacing = {1} >
                    {
                        cartItems.map((item) => (
                            <>                            
                            <Grid item xs = {3} width = "100%" style= {{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                                <img src = {getThumbnail(item.product)} alt = {item.product.name} width = "60%" height = "60%"></img>
                            </Grid>
                            <Grid item xs = {3} style= {{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                                <Typography>{item.product.name}</Typography>
                            </Grid>
                            <Grid item xs = {3} style= {{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                                {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(item.product.salePrice)}
                            </Grid>
                            <Grid item xs = {3} style= {{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                                <Typography>{item.quantity}</Typography>
                            </Grid>
                            </>
                        ))
                    }
                    <>                            
                            <Grid item xs = {6} width = "100%" style= {{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                            </Grid>

                            <Grid item xs = {3} style= {{display: 'flex',alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
                            {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(cartItemTotal)}

                            </Grid>
                            <Grid item xs = {3} style= {{display: 'flex',alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
                                {cartItemCount}
                            </Grid>
                            </>


            </Grid>
            </Paper>
            </Container>
        </Box>

    );
}

export default CartFeature;