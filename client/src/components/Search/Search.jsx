import React from 'react';
import './Search.css'

const Search = (props) => {
    return (
        <div>
            <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
                <input 
                    className="search-input"
                    value={props.value}
                    name="Search"
                    placeholder="Search"
                    type="text"
                    autoFocus
                />
            </form>
        </div>
    );
};

export default Search;