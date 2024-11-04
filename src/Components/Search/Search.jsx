import "../Search/Search.css"

// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Pesquisar produto..."
                className="search-input"
            />
            <button type="submit" className="search-button">
                <i className="bx bx-search"></i>
            </button>
        </form>
    );
};

export default SearchBar;