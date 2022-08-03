import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid,Container, Paper, Skeleton, Typography, Pagination } from '@mui/material';
import {styled} from '@mui/system'
import productApi from '../../../api/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';
import ProductSort from '../components/ProductSort';
import ProductFilters from '../components/ProductFilters';
import FilterViewer from '../components/FilterViewer';
import { useNavigate,useLocation } from 'react-router-dom';
import queryString from 'query-string';
ListPage.propTypes = {
    
};

function ListPage(props) {
    const navigate = useNavigate();
    const location  = useLocation();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);
        return {
            ...params,
            _page: Number.parseInt(params._page) || 1,
            _limit: Number.parseInt(params._limit) || 12,
            _sort: params._sort || 'salePrice:ASC',
            isPromotion: params.isPromotion === 'true',
            isFreeShip: params.isFreeShip === 'true',
        }
    },[location.search]);
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        limit: 12,
        total: 10,
        page: 1
    });
    // const [filters, setFilters] = useState(() => ({
    //     ...queryParams,
    //     _page: Number.parseInt(queryParams.page) || 1,   
    //     _limit: Number.parseInt(queryParams._limit) || 12,
    //     _sort: queryParams._sort || 'salePrice:ASC'
    // })
    // );
    // useEffect(() => {
    //     navigate(`?${queryString.stringify(filters)}`,{replace: true});
    // },[navigate, filters]);
    useEffect(() => {
        (async () => {
            try{
                const {data, pagination} = await productApi.getAll(queryParams);
                setProductList(data);
                setPagination(pagination);
            }
            catch(err){
                console.log(err);
            }
            setLoading(false);
        })();


    },[queryParams])
    function handlePageChange(e, page){
        // setFilters(prevFilters => (
        //     {...prevFilters,
        //     _page: page,
        // }
        // ))
        const filters = {
            ...queryParams,
            _page: page,
        }
        navigate(`?${queryString.stringify(filters)}`,{replace: true});

    }
    function handleSortChange(newValue){
        // setFilters(prevFilters => (
        //     {...prevFilters,
        //     _sort: newValue,
        //     _page: 1,
        // }
        // ))
        const filters = {
            ...queryParams,
            _sort: newValue,
        }
        navigate(`?${queryString.stringify(filters)}`,{replace: true});
    }
    function handleFiltersChange(newFilters){
        // setFilters(prevFilters => (
        //     {...prevFilters,
        //     ...newFilters,
        // }
        // ))
        const filters = {
            ...queryParams,
            ...newFilters,
        }
        navigate(`?${queryString.stringify(filters)}`,{replace: true});
        
    }
    function setNewFilters(newFilters){
        // setFilters(newFilters);

        navigate(`?${queryString.stringify(newFilters)}`,{replace: true});
    }
    return (
        <Box sx = {{paddingTop: '30px'}}>
            <Container>
                <Grid container spacing = {1}>
                    <Grid item sx  = {{width: '250px'}}>
                       <Paper elevation  = {0}>
                        <ProductFilters filters = {queryParams} onChange = {handleFiltersChange}/>
                       </Paper>
                    </Grid>
                    <Grid item sx = {{flex:'1 1 0'}}> 
                      <Paper elevation = {0}>
                           <ProductSort currentSort={queryParams._sort} onChange = {handleSortChange}/>
                            <FilterViewer filters = {queryParams} onChange ={setNewFilters}/>
                            {loading ? <ProductSkeletonList length = {12} /> : <ProductList data = {productList}/>}

                            <Box sx = {{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
                                <Pagination 
                                page={pagination.page} 
                                count = {Math.ceil(pagination.total / pagination.limit)} 
                                color="primary"
                                onChange={handlePageChange}
                                />
                            </Box>

                        </Paper>


                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;