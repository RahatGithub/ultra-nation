import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/more">More</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;