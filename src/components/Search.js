import React from 'react'

const Search = ({ handleInput, handleSubmit }) => {
    return (
        <section className="searchbar-wrapper">
            <form onSubmit={handleSubmit} className="search-form">
                <input 
                    type="text"
                    placeholder="Search for a city..."
                    onChange={ handleInput }
                    className="searchbar"
                />
                <button className="search-button">Submit</button>
            </form>
        </section>
    )
}

export default Search
