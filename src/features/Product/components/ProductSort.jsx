import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs } from '@mui/material'

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChage: PropTypes.func
}

function ProductSort({ currentSort, onChange }) {
    const handleSortChange = (event, newValue) => {
        if (onChange) {
            onChange(newValue)
        }
    }
    return (
        <Tabs
            value={currentSort}
            onChange={handleSortChange}
            aria-label="disabled tabs example"
        >
            <Tab label="Giá thấp đến cao" value="salePrice:ASC" />
            <Tab label="Giá cao xuống thấp" value="salePrice:DESC" />
        </Tabs>
    )
}

export default ProductSort
