import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import FilterByCategory from './Filters/FilterByCategory'
import FilterByPrice from './Filters/FilterByPrice'
import FilterByService from './Filters/FilterByService'

ProductFilters.propTypes = {
    filters: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

function ProductFilters({ filters, onChange }) {
    const handleCategoryChange = newCatogoryId => {
        if (!onChange) return
        const newFilter = {
            ...filters,
            'category.id': newCatogoryId
        }
        onChange(newFilter)
    }
    const handlePriceChange = value => {
        onChange(value)
    }
    const handleServiceChange = value => {
        onChange(value)
    }
    return (
        <Box padding={2}>
            <FilterByCategory onChange={handleCategoryChange} />
            <FilterByPrice onChange={handlePriceChange} />
            <FilterByService
                filters={filters}
                onChange={handleServiceChange}
            />
        </Box>
    )
}

export default ProductFilters
