import React from 'react';
import PropTypes from 'prop-types';
import { cartItemsCountSelector, cartTotalSelector } from './selectors';
import {useSelector} from 'react-redux'
import { Box, Container, Grid, IconButton, OutlinedInput, Paper, styled, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux'
import { removeFromCart, setQuantity } from './cartSlice';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
CartFeature.propTypes = {
    
};
const GridStyled = styled(Grid)(() => ({
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center'
}))
function CartFeature(props) {
    const dispatch = useDispatch()
    const cartItemTotal= useSelector(cartTotalSelector);
    const cartItemCount= useSelector(cartItemsCountSelector);
    const products = useSelector(state => state.cart);
    const cartItems = products.cartItems;

    const getThumbnail = function(product){
        return product.thumbnail ? `https://api.ezfrontend.com${product.thumbnail?.url}` : 'https://via.placeholder.com/300';
    }
    const handleClickDelete = (productId) => {
        dispatch(removeFromCart(productId))
    }
    const handleIncrement = (item) => {
        const payload = {id: item.id , quantity: item.quantity+1 }
        dispatch(setQuantity(payload))
    }
    const handleDecrement = (item) => {
        if(item.quantity > 1) {
            const payload = {id: item.id , quantity: item.quantity-1 }
            dispatch(setQuantity(payload))
        }
    }
    if(cartItems.length <= 0) return (<Box>No Products yet</Box>)
    return (
        
        <Box margin = "50px 0">        
        <Container>
        <Paper elevation={0} padding = "40px" >
            <Grid container spacing = {1} >
                    {
                        cartItems.map((item) => (
                            <>                            
                            <GridStyled item xs = {3} width = "100%" >
                                <img src = {getThumbnail(item.product)} alt = {item.product.name} width = "60%" height = "60%"></img>
                            </GridStyled>
                            <GridStyled item xs = {3} >
                                <Typography>{item.product.name}</Typography>
                            </GridStyled>
                            <GridStyled item xs = {3} >
                                {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(item.product.salePrice)}
                                <IconButton onClick = {() => handleClickDelete(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </GridStyled>
                            <GridStyled item xs = {3} >
                                <Box style = {{display: 'flex', flexDirection: 'row'}} >
                                    <IconButton onClick = {() => handleDecrement(item)} >
                                        <RemoveCircleOutlineRoundedIcon  />
                                    </IconButton>
                                    <OutlinedInput 
                                        type = "number"
                                        value = {item.quantity}
                                        // onChange = {}
                                    />
                                    <IconButton onClick = {() => handleIncrement(item)} >
                                        <AddCircleOutlineRoundedIcon/>
                                    </IconButton>
                                </Box>
                            </GridStyled>
                            </>
                        ))
                    }
                    <>                            
                            <GridStyled item xs = {6} width = "100%" >
                            </GridStyled>

                            <GridStyled item xs = {3} style= {{fontWeight: 'bold'}}>
                            {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(cartItemTotal)}

                            </GridStyled>
                            <GridStyled item xs = {3} style= {{fontWeight: 'bold'}}>
                                {cartItemCount}
                            </GridStyled>
                            </>


            </Grid>
            </Paper>
            </Container>
        </Box>
    );
}

export default CartFeature;