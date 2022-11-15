import React from 'react'

const SearchBar = ({ filterText, stocks, setFilterText, setStocks }) => {

    const handleSearchChange = (e) => {
        setFilterText(e.target.value)
    }
    const handleCheckbox = (e) => {
        setStocks(!stocks)
    }

    return (
        <form>
            <input type="search" placeholder='Search items here...' value={filterText} onChange={handleSearchChange} />
            <p>
                <input type="checkbox" checked={stocks} onClick={handleCheckbox} />
                {' '}
                Only show products in stock
            </p>
        </form>
    )
}

export default SearchBar