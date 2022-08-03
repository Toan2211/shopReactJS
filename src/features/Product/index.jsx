import React from 'react';
import PropTypes from 'prop-types';
import {Route, Routes} from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
ProductFeature.propTypes = {
    
};

function ProductFeature(props) {
    return (
        <div>

            <Routes>
                <Route path= "/" element = {<ListPage />} />
            {/* {/* <Route path="/add" element = {<AddEditPage />} /> */}
                <Route path="/:productId/*" element = {<DetailPage />} />
            </Routes>
        </div>
    );
}

export default ProductFeature;