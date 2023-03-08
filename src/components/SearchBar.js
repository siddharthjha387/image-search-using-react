import './SearchBar.css'
import React, { useState } from 'react'

export default function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('')
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };
    
    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                    <label htmlFor="search-term">Enter Search Term: </label>
                <input id="search-term" className='search-input' type="text" onChange={handleChange}/>
                {/* <button onClick={handleClick}>Click Here</button> */}
            </form>
        </div>
    )
}
