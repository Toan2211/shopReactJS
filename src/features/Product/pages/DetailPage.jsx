import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container } from '@mui/system';
import { Grid, Paper } from '@mui/material';
import ProductThumnail from '../components/ProductThumnail';
import { useParams } from 'react-router-dom';
import useProductDetail from '../hooks/useProductDetail';
import ProductInfo from '../components/ProductInfo';
import AddToCartForm from '../components/AddToCartForm';
import ProductMenu from '../components/ProductMenu';
import {Route, Routes} from 'react-router-dom';
import ProductAdditional from '../components/ProductAdditional';
import ProductDescription from '../components/ProductDescription';
import ProductReviews from '../components/ProductReviews';
import {useDispatch} from 'react-redux';
import { addToCart } from '../../Cart/cartSlice';

DetailPage.propTypes = {
    
};

function DetailPage(props) {
    const {productId} = useParams();
    const {product, loading}  = useProductDetail(productId);
    const dispath = useDispatch();
    const handleAddToCartSubmit = (formValues) => {
        
        const action = addToCart({
            id: productId,
            product,
            quantity: formValues.quantity,
        })
        console.log(action);
        dispath(action)

    }
    if(loading) return (<Box>Loading...</Box>)
    return (    
        <Box sx = {{paddingTop: '30px'}} >
            <Container>
                <Paper elevation = {0}>
                    <Grid container spacing = {1}>
                            <Grid item sx  = {{width: '320px', padding: '16px'}} >
                                 <ProductThumnail product = {product}/>
                            </Grid>
                            <Grid item sx = {{flex:'1 1 0',padding: '16px'}}>
                                <ProductInfo product = {product}/>
                                <AddToCartForm onSubmit = {handleAddToCartSubmit}/>
                            </Grid>
                    </Grid>
                </Paper>
                <ProductMenu />
                <Routes>
                    <Route path="/" element = {<ProductDescription product = {product}/>} />
                    <Route path="/addtional" element = {<ProductAdditional />} />
                    <Route path="/reviews" element = {<ProductReviews />} />

                </Routes>
            </Container>
        </Box>

    );
}

export default DetailPage;