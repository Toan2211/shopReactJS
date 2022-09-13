/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Chip } from '@mui/material'
import categoryApi from '../../../api/categoryApi'

FilterViewer.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func
}
const FILTER_LIST = [
    {
        id: 1,
        getLabel: (filters, categoryList) => 'Miễn phí vận chuyển',
        isActive: filters => filters.isFreeShip,
        isVisible: () => true,
        isRemovable: false,
        onRemove: () => {},
        onToggle: filters => {
            const newFilters = { ...filters }
            if (newFilters.isFreeShip) {
                delete newFilters.isFreeShip
            } else {
                newFilters.isFreeShip = true
            }
            return newFilters
        }
    },
    {
        id: 2,
        getLabel: (filters, categoryList) => 'Khuyến mãi',
        isActive: () => true,
        isVisible: filters => filters.isPromotion,
        isRemovable: true,
        onRemove: filters => {
            const newFilters = { ...filters }
            delete newFilters.isPromotion
            return newFilters
        },
        onToggle: () => {}
    },
    {
        id: 3,
        getLabel: (filters, categoryList) =>
            `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
        isActive: () => true,
        isVisible: filters =>
            Object.keys(filters).includes('salePrice_lte') &&
            Object.keys(filters).includes('salePrice_gte'),
        isRemovable: true,
        onRemove: filters => {
            const newFilters = { ...filters }
            delete newFilters.salePrice_lte
            delete newFilters.salePrice_gte
            return newFilters
        },
        onToggle: () => {}
    },
    {
        id: 4,
        getLabel: (filters, categoryList) => {
            const category = categoryList.find(
                x => x.id === Number.parseInt(filters['category.id'])
            )
            if (category) return category.name
        },
        isActive: () => true,
        isVisible: filters =>
            Object.keys(filters).includes('category.id'),
        isRemovable: true,
        onRemove: filters => {
            const newFilters = { ...filters }
            delete newFilters['category.id']
            return newFilters
        },
        onToggle: () => {}
    }
]
function FilterViewer({ filters = {}, onChange = null }) {
    const [categoryList, setCategoryList] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const reponse = await categoryApi.getAll()
                setCategoryList(reponse)
            } catch (err) {
                alert(err)
            }
        })()
    }, [])

    const visibleFilters = useMemo(() => {
        return FILTER_LIST.filter(x => x.isVisible(filters))
    }, [filters])

    return (
        <Box
            component="ul"
            sx={{
                display: 'flex',
                flexflow: 'row wrap',
                alignItems: 'center',
                margin: '10px 0',
                listStyleType: 'none'
            }}
        >
            {visibleFilters.map(x => (
                <li key={x.id} style={{ marginRight: '10px' }}>
                    <Chip
                        label={x.getLabel(filters, categoryList)}
                        color={
                            x.isActive(filters)
                                ? 'primary'
                                : 'default'
                        }
                        clickable={!x.isRemovable}
                        onClick={
                            x.isRemovable
                                ? null
                                : () => {
                                    if (!onChange) return
                                    const newFilters =
                                        x.onToggle(filters)
                                    onChange(newFilters)
                                }
                        }
                        onDelete={
                            x.isRemovable
                                ? () => {
                                    if (!onChange) return
                                    const newFilters =
                                        x.onRemove(filters)
                                    onChange(newFilters)
                                }
                                : null
                        }
                    />
                </li>
            ))}
        </Box>
    )
}

export default FilterViewer
