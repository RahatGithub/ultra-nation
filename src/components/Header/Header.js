import React, { useState } from 'react';
import './Header.css';

const Header = (props) => {
    const {collection} = props;
    let total = 0;
    for(let i=0; i<collection.length; i++){
        const country = collection[i];
        total += country.population;
    }

    return (
        <div className="header">
            <nav className='navbar'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/more">More</a>
                <a href="/contact">Contact</a>
            </nav>
            <div className="show-info">
                <p>Countries selected: {collection.length}</p>
                <p>Total population: {total}</p>
            </div>
        </div>
    );
};

export default Header;