import React from 'react'

const ProductCategoryRow = ({ category }) => {
    return (
        <tr>
            <th aria-colspan={2}>
                {category}
            </th>
        </tr>
    )
}

export default ProductCategoryRow