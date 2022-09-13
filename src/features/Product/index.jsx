import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListPage from './pages/ListPage'
import DetailPage from './pages/DetailPage'

function ProductFeature() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ListPage />} />
                <Route
                    path="/:productId/*"
                    element={<DetailPage />}
                />
            </Routes>
        </div>
    )
}

export default ProductFeature
