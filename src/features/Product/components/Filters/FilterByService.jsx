import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import { Box } from '@mui/system'

FilterByService.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func
}

function FilterByService({ filters = {}, onChange }) {
    const handleChange = e => {
        const { name, checked } = e.target
        if (onChange) onChange({ [name]: checked })
    }

    return (
        <Box>
            <Typography variant="subtitle2" fontWeight="bold">
                Dịch vụ
            </Typography>
            <ul
                style={{
                    listStyleType: 'none',
                    padding: '0',
                    margin: '0'
                }}
            >
                {[
                    { value: 'isPromotion', label: 'Khuyến mãi' },
                    {
                        value: 'isFreeShip',
                        label: 'Miễn phí vận chuyển'
                    }
                ].map(service => (
                    <li key={service.value}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Boolean(
                                        filters[service.value]
                                    )}
                                    onChange={handleChange}
                                    name={service.value}
                                />
                            }
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    )
}

export default FilterByService
